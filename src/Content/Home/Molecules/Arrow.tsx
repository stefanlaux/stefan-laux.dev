import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../../../CSS/App.css";
import IconButton from "@mui/material/IconButton";
import {Link} from "@mui/material";

export default function Arrow() {

    return (
        <div>
            <IconButton href={"#aboutme"} color={"primary"} style={{ transform: "rotate(-90deg)", borderRadius: "100%", position: "absolute", bottom: "5%", left: "50%",}} size={"medium"} >
                <ArrowBackIosIcon fontSize={"large"} style={{ width: 48, height: 48, top: "5%", position: "relative" }}  />

            </IconButton>
        </div>
    );
}