import React from "react";
import "../../CSS/App.css";
import Box from "@mui/material/Box";
import Title from "./Title";


export default function AboutMe() {

    return(
        <div id={"aboutme"}>
            <Box
                sx={{
                    display: 'block',
                    width: '100vw',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',

                }}>
                <Title />
            </Box>
        </div>
    );
}