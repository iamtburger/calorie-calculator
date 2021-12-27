import { Paper, styled, Typography } from "@mui/material";

const StyledResultPaper = styled(Paper)(({ theme }) => ({
	height: "80px",
	backgroundColor: theme.palette.primary.main,
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	padding: "5px",
	border: "2px solid white",
}));

interface IResultProps {
	calorieNeed: number;
}

const Result = ({ calorieNeed }: IResultProps) => {
	return (
		<StyledResultPaper elevation={6}>
			{" "}
			<Typography>
				Under current conditions <strong>{calorieNeed}</strong> are necessary
				daily!
			</Typography>
		</StyledResultPaper>
	);
};

export default Result;
