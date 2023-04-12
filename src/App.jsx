import './App.css'
import Home from './pages/Home'
import {useEffect} from "react";

function App() {


    useEffect(() => {
      const blob = document.getElementById("blob")

      document.body.onpointermove = event =>{
          const {clientX, clientY} = event

          blob.animate({
              left: `${clientX}px`,
              top: `${clientY}px`
          }, { duration: 1500, fill: "forwards"})


      }
    }, []);


  return (
    <div className="App">
        <div className="containerBackgroundEffect">
            <div className="blur"></div>
            <div className={"blob"} id="blob"></div>
        </div>
    <Home></Home>
    </div>
  )
}

export default App
