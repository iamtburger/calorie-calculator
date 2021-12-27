import { Paper, styled } from "@mui/material";
import React from "react";

const PaperLineBlock = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	minHeight: "90px",
	width: "80%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "10px",
	margin: "10px",
}));

interface ILineBlockProps {
	children: React.ReactNode;
}

const LineBlock = ({ children }: ILineBlockProps) => {
	return <PaperLineBlock elevation={6}>{children}</PaperLineBlock>;
};

export default LineBlock;
