import "./App.css";
import CalorieForm from "./CalorieForm/CalorieForm";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { grey } from "@mui/material/colors";

let theme = createTheme({
	palette: {
		primary: {
			light: grey[50],
			main: grey[800],
			dark: grey[900],
		},
		secondary: {
			main: "#FF4040",
		},
	},
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CalorieForm />
		</ThemeProvider>
	);
}

export default App;
