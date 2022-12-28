import * as React from 'react';
import "../../CSS/Home.css"
import {motion, useInView, useScroll, useSpring} from 'framer-motion';
import {useEffect} from 'react';
import {animate} from 'motion';
import About from "../Container/About";


export default function Home() {

    const refTitle = React.useRef(null);
    const isInViewTitle = useInView(refTitle);
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
        restSpeed: 0.001,
    });

    const [Yoffset, setYoffset] = React.useState(0);

    window.addEventListener('scroll', () => {
        setYoffset(window.pageYOffset);
    });

    useEffect(() => {

        if (isInViewTitle) {
            animate(
                ".developer",
                {opacity: 1, marginLeft: "5px"},
                {delay: .5, duration: 2}
            )
            animate(
                ".creative",
                {opacity: 1},
                {delay: 1, duration: 2}
            )
        }
        if (Yoffset > 80){
            document.getElementsByTagName("html")[0]!.style.background = "var(--color-dark-primary)";
            document.getElementsByTagName("html")[0]!.style.color = "var(--color-secondary)";
        }else{
            document.getElementsByTagName("html")[0]!.style.background = "var(--color-secondary)";
            document.getElementsByTagName("html")[0]!.style.color = "black";
        }

    }, [isInViewTitle, Yoffset]);

    return (
        <div className='wrap' id={"wrap"}>
            <div className="backgroundTextHome">
                <p>APPLICATION</p>
                <p>DEVELOPER</p>
            </div>
            <div className="landerSize">
                <div>
                    <motion.div className="scrollProgressLeft" style={{scaleX}}/>
                    <motion.div className="scrollProgressRight" style={{scaleX}}/>
                </div>
                <div className="header">
                    <div className="nameTitle">
                        <p className="hidden-mobile">STEFAN LAUX</p>
                        <p className="hidden-desktop">SL</p>
                    </div>
                    <div className="nav">
                        <a href={"#work"} className='leftBtn'>&#60;Work /&#x3e; </a>
                        <p>|</p>
                        <a href={"#about"} className='rightBtn'> &#60;About /&#x3e;</a>
                    </div>
                </div>
                <div className='professionName'>
                    <h3 className='underline creative'>CREATIVE</h3><h3 ref={refTitle} className='highlight developer'>DEVELOPER</h3>
                </div>
            </div>

            <div className="about">
                <About/>
            </div>
        </div>
    );
}