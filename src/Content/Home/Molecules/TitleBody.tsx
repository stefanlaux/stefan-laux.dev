
import React from "react";
import {Typography} from "@mui/material";
import "../../../CSS/App.css"
import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function TitleBody() {

    const theme = createTheme({
        typography: {
            fontSize: 150,
            fontWeightBold: "bold",
            fontFamily: "'Libre Barcode 39 Text', cursive",
        },
    });

    return (
            <ThemeProvider theme={theme}>
            <Typography className={"title"}>STEFAN LAUX</Typography>
            </ThemeProvider>
    );
}