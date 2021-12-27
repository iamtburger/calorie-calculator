import {
	ToggleButtonGroup,
	ToggleButton,
	styled,
	InputLabel,
	Box,
	Typography,
} from "@mui/material";
import React from "react";

interface IOption {
	value: string | number;
	text: string;
}

interface IToggleProps {
	state: string | number;
	handleChange: (e: React.MouseEvent<HTMLElement>, value: string) => void;
	options: IOption[];
	label: string;
}

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	"&.Mui-selected": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.light,
		border: "1px solid #fafafa",
	},
	"&:hover.Mui-selected": {
		backgroundColor: theme.palette.primary.dark,
		color: "white",
	},
	"&:hover": {
		backgroundColor: "#eeeeee",
		border: "1px solid #fafafa",
	},
	width: "100%",
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
	width: "90%",
	display: "flex",
	justifyContent: "center",
}));

const Toggle = ({ state, handleChange, options, label }: IToggleProps) => {
	return (
		<>
			<Box display="flex" flexDirection="column" width="100%">
				<InputLabel sx={{ color: "white", alignSelf: "flex-start", ml: "10%" }}>
					{label}
				</InputLabel>
				<Box display="flex" justifyContent="center">
					<StyledToggleButtonGroup
						color="primary"
						value={state}
						exclusive
						onChange={handleChange}
					>
						{options.map((option: IOption) => (
							<StyledToggleButton key={option.value} value={option.value}>
								<Typography variant="body2">{option.text}</Typography>
							</StyledToggleButton>
						))}
					</StyledToggleButtonGroup>
				</Box>
			</Box>
		</>
	);
};

export default Toggle;
