import {
	Button,
	Container,
	Grid,
	Grow,
	Paper,
	styled,
	Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useCallback, useState } from "react";
import {
	calculateNeat,
	calculateCarlorieNeed,
	ActivityLevel,
	GoalMultiplier,
} from "../helpers/equation";

import Toggle from "../Toggle/Toggle";
import LineBlock from "../LineBlock/LineBlock";
import NumInput from "../NumInput/NumInput";
import Footer from "../Footer/Footer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Result from "../Result/Result";

const StyledSubmitButton = styled(Button)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
	backgroundColor: theme.palette.primary.main,
	width: "50%",
	height: "50px",
	marginTop: "10px",
	marginBottom: "10px",
}));

const genderOptions = [
	{ value: "female", text: "Female" },
	{ value: "male", text: "Male" },
];

const activityLevelOptions = [
	{ value: ActivityLevel.low, text: "Light" },
	{ value: ActivityLevel.medium, text: "Moderate" },
	{ value: ActivityLevel.high, text: "High" },
];

const goalOptions = [
	{ value: GoalMultiplier.bulk, text: "Bulk" },
	{ value: GoalMultiplier.recomp, text: "Recomp" },
	{ value: GoalMultiplier.cut, text: "Cut" },
];

const CalorieForm = () => {
	const [gender, setGender] = useState("female");
	const [units] = useState("metric");
	const [activityLevel, setActivityLevel] = useState(ActivityLevel.medium);
	const [goal, setGoal] = useState(GoalMultiplier.recomp);
	const [calorieNeed, setCalorieNeed] = useState(0);

	const [error, setError] = useState({
		heightError: false,
		weightError: false,
		ageError: false,
	});

	const handleGenderChange = useCallback(
		(e: React.MouseEvent<HTMLElement>, newGender: string) => {
			newGender && setGender(newGender);
		},
		[]
	);

	const handleActivityChange = useCallback(
		(e: React.MouseEvent<HTMLElement>, newActvitiyLevel: string) => {
			newActvitiyLevel && setActivityLevel(Number(newActvitiyLevel));
		},
		[]
	);

	const handleGoalChange = useCallback(
		(e: React.MouseEvent<HTMLElement>, newGoal: string) => {
			newGoal && setGoal(Number(newGoal));
		},
		[]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const neat = calculateNeat(
			Number(formData.get("weight")),
			Number(formData.get("height")),
			Number(formData.get("age")),
			gender
		);
		const calorieNeed = calculateCarlorieNeed(neat, activityLevel, goal);
		setCalorieNeed(Math.round(calorieNeed));
	};

	const handleHeightChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (isNaN(Number(e.target.value))) {
				setError((state) => ({ ...state, heightError: true }));
			} else {
				setError((state) => ({ ...state, heightError: false }));
			}
		},
		[]
	);

	const handleWeightChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (isNaN(Number(e.target.value))) {
				setError((state) => ({ ...state, weightError: true }));
			} else {
				setError((state) => ({ ...state, weightError: false }));
			}
		},
		[]
	);

	const handleAgeChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (isNaN(Number(e.target.value))) {
				setError((state) => ({ ...state, ageError: true }));
			} else {
				setError((state) => ({ ...state, ageError: false }));
			}
		},
		[]
	);

	const formHasErrors = Object.values(error).some((value) => value);

	return (
		<Container maxWidth="sm">
			<Paper
				elevation={5}
				sx={{
					backgroundColor: "rgb(145, 145, 145)",
					padding: "10px",
					mt: 2,
					mb: 1,
				}}
			>
				<Box
					className="title-container"
					display="flex"
					alignItems="flex-end"
					justifyContent="center"
				>
					<Typography
						variant="h4"
						textAlign="center"
						sx={{ mt: 1, color: "white", ml: 1 }}
						className="title"
					>
						CALORIE CALCULATOR
					</Typography>
				</Box>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						mt: 2,
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<LineBlock>
						<Toggle
							state={gender}
							handleChange={handleGenderChange}
							label="Gender"
							options={genderOptions}
						/>
					</LineBlock>
					<LineBlock>
						<Grid container justifyContent="space-between" width="90%">
							<Grid item xs={12} md={3} mb="5px">
								<NumInput
									error={error.heightError}
									label={"height"}
									handleChange={handleHeightChange}
									type={units === "metric" ? "cm" : "ft"}
								/>
							</Grid>
							<Grid item xs={12} md={3} mb="5px">
								<NumInput
									error={error.weightError}
									label="weight"
									handleChange={handleWeightChange}
									type={units === "metric" ? "kg" : "lbs"}
								/>
							</Grid>
							<Grid item xs={12} md={3}>
								<NumInput
									error={error.ageError}
									label="age"
									handleChange={handleAgeChange}
									type=""
								/>
							</Grid>
						</Grid>
					</LineBlock>
					<LineBlock>
						<Toggle
							state={activityLevel}
							handleChange={handleActivityChange}
							label="Training Intensity"
							options={activityLevelOptions}
						/>
					</LineBlock>
					<LineBlock>
						<Toggle
							state={goal}
							handleChange={handleGoalChange}
							label="Goal"
							options={goalOptions}
						/>
					</LineBlock>
					<StyledSubmitButton
						variant="contained"
						type="submit"
						disabled={formHasErrors}
					>
						{calorieNeed === 0 ? "Calculate" : "Recalculate"}
					</StyledSubmitButton>
					<Grow in={formHasErrors}>
						<Box display="flex" width="80%" justifyContent="center">
							<ErrorMessage>
								<Typography>Please enter only numbers!</Typography>
							</ErrorMessage>
						</Box>
					</Grow>
					<Grow in={calorieNeed > 0 && !formHasErrors}>
						<Box display="flex" width="80%" justifyContent="center">
							<Result calorieNeed={calorieNeed} />
						</Box>
					</Grow>
				</Box>
				<Footer />
			</Paper>
		</Container>
	);
};

export default CalorieForm;
