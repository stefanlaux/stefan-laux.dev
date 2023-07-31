import './App.css'
import {useEffect} from "react";
import video from "./assets/video.mp4"

function App() {




  return (
    <div className="App">
        <video class="fullscreen-video" id="myVideo" autoplay="autoplay" muted loop>
  <source src={video} type="video/mp4" />
  Error Message
</video>
    </div>
  )
}

export default App
