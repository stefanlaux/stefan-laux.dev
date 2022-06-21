
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
                <div className="title-body">
                    <Typography className={"title"}>S</Typography>
                    <Typography className={"title"}>T</Typography>
                    <Typography className={"title"}>E</Typography>
                    <Typography className={"title"}>F</Typography>
                    <Typography className={"title"}>A</Typography>
                    <Typography className={"title"}>N</Typography>
                    <Typography className={"title"}> </Typography>
                    <Typography className={"title"}>L</Typography>
                    <Typography className={"title"}>A</Typography>
                    <Typography className={"title"}>U</Typography>
                    <Typography className={"title"}>X</Typography>
                </div>

            </ThemeProvider>
    );
}