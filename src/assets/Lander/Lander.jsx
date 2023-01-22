import './Lander.css'
import {useEffect, useState} from 'react';

export default function Lander() {


    useEffect(() => {
        const position = document.documentElement;
        position.style.setProperty('--width', 100 + 'px');
        position.addEventListener('mousemove', (e) => {
            position.style.setProperty('--x', e.clientX + 'px');
            position.style.setProperty('--y', e.clientY + 'px');
        });
    } , [])


  return (
    <div className="App">

        <div className="background"></div>
        <div className="mouse"></div>

            <div className="title">
                STEFAN LAUX
            </div>


                <div className="navbarText">
                    <div>About</div>
                    <div>Work</div>
                    <div>Hobby</div>
                </div>


    </div>
  )
}


