import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import IconButton from "@mui/material/IconButton";
import {Button, Divider, Grid, Toolbar, Typography} from "@mui/material";
import {Logout, TimeToLeave} from "@mui/icons-material";
import "../../../CSS/App.css";

interface props{
    colorMode: {
        toggleColorMode: () => void;
    }
    theme: {
        palette: {
            mode: string;
        }
    }
}

export default function Head({colorMode, theme}: props) {

    return (

        <Toolbar className={"sticky"}>
            <Grid container>
                <IconButton className={"sticky"} size={"small"} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="large" /> : <Brightness4Icon fontSize="large" />}
                </IconButton>


                <div className={"buttonsNav"}>
                    <Button href={"#aboutme"} className={"leftBtn"}  size={"small"} sx={{"fontWeight": "bold", "fontSize": "120%", "right": "4%" }} color={"inherit"} disableRipple={true}  style={{ "backgroundColor": "transparent"}} >About me</Button>
                    |
                    <Button href={"#projects"}  className={"rightBtn"} size={"small"} sx={{"fontWeight": "bold", "fontSize": "120%", "left": "4%"}} color={"inherit"} disableRipple={true}  style={{ "backgroundColor": "transparent"}} >Projects</Button>
                </div>



            </Grid>

                <Grid container justifyContent="flex-end">
                    <IconButton className={"sticky"} size={"small"} href={"https://www.google.com"} >
                        <Logout color={"error"} />
                    </IconButton>
                </Grid>
        </Toolbar>

    );
}