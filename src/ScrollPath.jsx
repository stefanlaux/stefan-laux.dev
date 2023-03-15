import './ScrollPath.css'
import Lander from "./Lander.jsx";
import Skills from "./Skills.jsx";
import {useEffect, useState} from "react";
import {animate} from "motion";



function ScrollPath() {

    let first = true;
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentScrolled = (window.pageYOffset / pageHeight) * 300;
            setScrolled(currentScrolled);
            console.log(currentScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect( () => {
        let element1 = document.getElementById("element1");
        let element2 = document.getElementById("element2");
        let skills = document.getElementById("skillsContainer");
        if (scrolled > 90) {
            skills.style.left = 0 + "px";
            if (first) {
                first = false
                animate(skills, {opacity: 1}, {duration: 0.2});
            }
        } else {
            first = true
            animate(skills, {opacity: 0}, {duration: 0.05});
        }

        if (scrolled < 100) {
            element2.style.top = (-100 + scrolled) + "vh";
            element1.style.top = (100 - scrolled) + "vh";
        }


    } , [scrolled]);


    return (
        <div className="scrollPath">

            <div className="elements">
                <div className="element" id={"element1"}></div>
                <div className="element" id={"element2"}></div>
            </div>


            <div id="landerContainer"><Lander /></div>
            <div id="skillsContainer"><Skills /></div>
        </div>
    )
}

export default ScrollPath
