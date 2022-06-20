import React from "react";
import Box from "@mui/material/Box";
import Icons from "./Molecules/Icons";
import Head from "./Molecules/Head";
import TitleBody from "./Molecules/TitleBody";
import BackgroundText from "./Molecules/BackgroundText";
import Arrow from "./Molecules/Arrow";

interface props {
    colorMode: {
        toggleColorMode: () => void;
    }
    theme: {
        palette: {
            mode: string;
        }
    }
}

export default function Home({colorMode, theme}: props) {
  return <div>

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
      <Head colorMode={colorMode} theme={theme}/>
      <TitleBody />
      <BackgroundText />
        <Icons />
        <Arrow />
    </Box>
  </div>;
}