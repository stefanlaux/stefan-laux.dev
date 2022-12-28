import * as React from 'react';
import Home from "./Content/Pages/Home";
import "./CSS/App.css"



export default function MyApp() {
    document.title = "Stefan Laux"
   
    return (
        <div className='allWrap'>
            <Home />
        </div>

    );
}