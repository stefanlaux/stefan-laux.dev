import "./index.css";
import menuIcon from "../assets/menuIcon.svg"
import {useEffect, useState} from "react";


function Navbar() {

    const [isVisible, setIsVisible] = useState(false);


    const handleClick = () =>{
        setIsVisible(!isVisible)
        if (isVisible){
            document.getElementById("navMenu").style.display = "flex"
        }else{
            document.getElementById("navMenu").style.display = "none"

        }
    }

    useEffect(() => {
        for (const link of document.getElementsByClassName("link")){
            link.onmousemove = e =>{
                const decimal = e.clientX / link.offsetWidth;
                const basePercent = 40, percentRange = 50, adjustablePercent = percentRange * decimal;

                const lightBluePercent = basePercent + adjustablePercent;
                link.style.setProperty("--gradientPercent", `${lightBluePercent}%`)
            }
        }
    }, []);

  
    return (
      <div className="navbar">
        <div className="content">
            <button>
                <img src={menuIcon} onClick={() => handleClick()} alt=""/>
            </button>
            <div className="navMenu" id={"navMenu"}>
                <a className={"link"} href="/about">UNFINISHED</a>
                <a className={"link"} href="/about">SITE</a>
                <a className={"link"} href="/about">STEFAN LAUX</a>
            </div>

        </div>
      </div>
    )
  }
  
  export default Navbar
  