import {
	ToggleButtonGroup,
	ToggleButton,
	styled,
	InputLabel,
	Box,
	Typography,
} from "@mui/material";

interface IOption {
	value: string;
	text: string;
}

const StyledToggleButton = styled(ToggleButton)(() => ({
	backgroundColor: "rgb(248,248,255)",
	"&.Mui-selected": {
		backgroundColor: "rgb(66, 66, 66)",
		color: "white",
		border: "1px solid white",
	},
	"&:hover.Mui-selected": {
		backgroundColor: "rgb(69, 69, 69)",
		color: "white",
	},
	"&:hover": {
		backgroundColor: "rgb(220, 220, 224)",
		border: "1px solid white",
	},
	width: "100%",
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
	width: "90%",
	display: "flex",
	justifyContent: "center",
}));

const Toggle = ({ state, handleChange, options, label }: any) => {
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
