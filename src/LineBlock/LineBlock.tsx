import { Paper, styled } from "@mui/material";
import React from "react";

const PaperLineBlock = styled(Paper)(() => ({
	backgroundColor: "rgb(255, 64, 64)",
	minHeight: "90px",
	width: "80%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "10px",
	margin: "10px",
}));

interface IChildren {
	children: React.ReactNode;
}

const LineBlock = ({ children }: IChildren) => {
	return <PaperLineBlock elevation={6}>{children}</PaperLineBlock>;
};

export default LineBlock;
