import * as React from 'react';
import "../../CSS/Home.css"
import {motion, useInView, useScroll, useSpring} from 'framer-motion';
import {useEffect} from 'react';
import {animate} from 'motion';


export default function Home() {

    const refTitle = React.useRef(null);
    const isInViewTitle = useInView(refTitle);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
        restSpeed: 0.001,
    });

    useEffect(() => {
        if (isInViewTitle) {
            console.log("in view");
           animate(
                ".developer",
                { opacity: 1, marginLeft: "5px" },
                { delay: .5, duration: 3}
            )
            animate(
                ".creative",
                { opacity: 1},
                { delay: 1, duration: 3}
            )
        }

    }, [isInViewTitle]);

    return (
        <div className='wrap'>
            <div>
                <motion.div className="scrollProgress" style={{ scaleX }} />
            </div>

            <div className="header">

                <div  className="nameTitle">
                    <p>Stefan Laux</p>
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

    );
}