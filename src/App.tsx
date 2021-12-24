import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalorieForm from "./CalorieForm/CalorieForm";
import { createTheme, Paper, responsiveFontSizes } from "@mui/material";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

declare module "@mui/material/styles" {
	interface Theme {
		toggle: {
			thumbOnColor: string;
			trackOnCOlor: string;
		};
		selected: {
			backgroundColor: string;
			color: string;
		};
		drawerPaper: { background: string };
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		toggle: {
			thumbOnColor: string;
			trackOnColor: string;
		};
		selected: {
			backgroundColor: string;
			color: string;
		};
		drawerPaper: { background: string };
	}
}

let theme = createTheme({
	toggle: {
		thumbOnColor: "yellow",
		trackOnColor: "red",
	},
	selected: {
		backgroundColor: "yellow",
		color: "white",
	},
	drawerPaper: { background: "blue" },
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <div className="App"> */}
			<CalorieForm />
			{/* </div> */}
		</ThemeProvider>
	);
}

export default App;
