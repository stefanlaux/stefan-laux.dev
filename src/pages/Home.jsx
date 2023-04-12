import "./index.css";
import Navbar from "../prefabs/Navbar";
import homeImage from "../assets/homeImage.jpeg"

function Home() {
  
    return (
      <div className="home">
        <Navbar />
          <div className="contentHome">
              <div className="textContent">
                  <hr/>
                  <div className="containerText">
                      <h1>Hello.</h1>
                      <h1>I'm.</h1>
                      <h1>Stefan Laux.</h1>
                  </div>
              </div>

          </div>
      </div>
    )
  }
  
  export default Home
  