import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import "./CSS/mobileHidden.css";
import {useEffect} from "react";
import Home from "./Content/Home/Home";
import Projects from "./Content/Projects/Projects";
import {createStyles, makeStyles} from "@mui/material";
import {Theme} from "@emotion/react";
import AboutMe from "./Content/AboutMe/AboutMe";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
    document.title = "Stefan Laux"
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <div className={"mobileHidden"}>
            <Home colorMode={colorMode} theme={theme} />
            <AboutMe />
            <Projects />
        </div>

    );
}

export default function ToggleColorMode() {
    let initialTheme = localStorage.getItem('theme');
    const [mode, setMode] = React.useState<'light' | 'dark'>(initialTheme == 'dark' || initialTheme == 'light' ? initialTheme : 'dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    );


    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },

                
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme} >
                <MyApp />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
