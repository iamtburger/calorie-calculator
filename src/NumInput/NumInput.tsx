import { InputAdornment, TextField } from "@mui/material";

interface INumInputProps {
	error: boolean;
	handleChange: (e: any) => void;
	label: string;
	type: string;
}

const NumInput = ({ error, handleChange, label, type }: INumInputProps) => {
	const capitalizeFirstLetter = (word: string) => {
		return word.slice(0, 1).toLocaleUpperCase() + word.slice(1);
	};

	return (
		<TextField
			error={error}
			id={label}
			label={capitalizeFirstLetter(label)}
			type={label}
			name={label}
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
				endAdornment: <InputAdornment position="end">{type}</InputAdornment>,
			}}
			onChange={handleChange}
		/>
	);
};

export default NumInput;
