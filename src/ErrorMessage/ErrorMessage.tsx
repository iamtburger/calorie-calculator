import { Paper, styled } from "@mui/material";
import React from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
	height: "30px",
	backgroundColor: theme.palette.secondary.main,
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	mt: 0,
}));

interface IErrorMessageProps {
	children: React.ReactNode;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
	return <StyledPaper elevation={6}>{children}</StyledPaper>;
};

export default ErrorMessage;
