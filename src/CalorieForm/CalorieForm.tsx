import {
	Button,
	Container,
	Grid,
	Grow,
	InputAdornment,
	Paper,
	TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import {
	calculateNeat,
	calculateCarlorieNeed,
	ActivityLevel,
	GoalMultiplier,
} from "../helpers/equation";

import Toggle from "../Toggle/Toggle";
import LineBlock from "../LineBlock/LineBlock";

const CalorieForm = () => {
	const [gender, setGender] = useState("female");
	const [units] = useState("metric");
	const [activityLevel, setActivityLevel] = useState(ActivityLevel.medium);
	const [goal, setGoal] = useState(GoalMultiplier.recomp);
	const [calorieNeed, setCalorieNeed] = useState(0);

	const [heightError, setHeightError] = useState(false);
	const [weightError, setWeightError] = useState(false);
	const [ageError, setAgeError] = useState(false);

	const handleGenderChange = (
		e: React.MouseEvent<HTMLElement>,
		newGender: string
	) => {
		newGender && setGender(newGender);
	};

	const handleActivityChange = (
		e: React.MouseEvent<HTMLElement>,
		newActvitiyLevel: string
	) => {
		setActivityLevel(Number(newActvitiyLevel));
	};
	const handleGoalChange = (
		e: React.MouseEvent<HTMLElement>,
		newGoal: string
	) => {
		setGoal(Number(newGoal));
	};
	const handleSubmit = (e: any) => {
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

	const handleHeightChange = (e: any) => {
		if (isNaN(Number(e.target.value))) {
			setHeightError(true);
		} else {
			setHeightError(false);
		}
	};
	const handleWeightChange = (e: any) => {
		if (isNaN(Number(e.target.value))) {
			setWeightError(true);
		} else {
			setWeightError(false);
		}
	};
	const handleAgeChange = (e: any) => {
		if (isNaN(Number(e.target.value))) {
			setAgeError(true);
		} else {
			setAgeError(false);
		}
	};

	const formHasErrors = heightError || weightError || ageError;

	return (
		// <>
		<Container maxWidth="sm">
			<Paper
				elevation={5}
				sx={{ backgroundColor: "rgb(145, 145, 145)", padding: "10px", mt: 2 }}
			>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						mt: 3,
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
							options={[
								{ value: "female", text: "Female" },
								{ value: "male", text: "Male" },
							]}
						/>
					</LineBlock>
					<LineBlock>
						<Grid container justifyContent="space-between" width="90%">
							<Grid item xs={12} md={3} mb="5px">
								<TextField
									error={heightError}
									id="height"
									label="Height"
									type="height"
									name="height"
									variant="filled"
									InputLabelProps={{
										shrink: true,
									}}
									sx={{
										width: "100%",
										backgroundColor: "rgb(248,248,255)",
										borderRadius: "5%",
										justifySelf: "center",
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												{units === "metric" ? "cm" : "in"}
											</InputAdornment>
										),
									}}
									onChange={handleHeightChange}
								/>
							</Grid>
							<Grid item xs={12} md={3} mb="5px">
								<TextField
									id="weight"
									label="Weight"
									type="weight"
									name="weight"
									variant="filled"
									sx={{
										width: "100%",
										backgroundColor: "rgb(248,248,255)",
										borderRadius: "5%",
									}}
									InputLabelProps={{
										shrink: true,
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												{units === "metric" ? "kg" : "lbs"}
											</InputAdornment>
										),
									}}
									onChange={handleWeightChange}
								/>
							</Grid>
							<Grid item xs={12} md={3}>
								<TextField
									id="age"
									label="Age"
									type="age"
									name="age"
									variant="filled"
									sx={{
										width: "100%",
										backgroundColor: "rgb(248,248,255)",
										borderRadius: "5%",
									}}
									InputLabelProps={{
										shrink: true,
									}}
									onChange={handleAgeChange}
								/>
							</Grid>
						</Grid>
					</LineBlock>
					<LineBlock>
						<Toggle
							state={activityLevel}
							handleChange={handleActivityChange}
							label="Training Intensity"
							options={[
								{ value: ActivityLevel.low, text: "Light" },
								{ value: ActivityLevel.medium, text: "Moderate" },
								{ value: ActivityLevel.high, text: "High" },
							]}
						/>
					</LineBlock>
					<LineBlock>
						<Toggle
							state={goal}
							handleChange={handleGoalChange}
							label="Goal"
							options={[
								{ value: GoalMultiplier.bulk, text: "Bulk" },
								{ value: GoalMultiplier.recomp, text: "Recomp" },
								{ value: GoalMultiplier.cut, text: "Cut" },
							]}
						/>
					</LineBlock>
					<Button
						variant="contained"
						type="submit"
						sx={{
							backgroundColor: "rgb(66, 66, 66)",
							width: "50%",
							height: "50px",
							m: 1,
						}}
					>
						{calorieNeed === 0 ? "Calculate" : "Recalculate"}
					</Button>
					<Grow in={formHasErrors}>
						<Paper
							elevation={6}
							sx={{
								height: "30px",
								backgroundColor: "rgb(255, 64, 64)",
								color: "white",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "80%",
								mt: 0,
							}}
						>
							<p>Please enter only numbers!</p>
						</Paper>
					</Grow>
					<Grow in={calorieNeed > 0}>
						<Paper
							elevation={3}
							sx={{
								height: "80px",
								backgroundColor: "rgb(66, 66, 66)",
								color: "white",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "80%",
								mt: -3,
								border: "2px solid white",
							}}
						>
							<p>
								Under current conditions <strong>{calorieNeed}</strong> are
								necessary daily!
							</p>
						</Paper>
					</Grow>
				</Box>
			</Paper>
		</Container>
		// </>
	);
};

export default CalorieForm;
