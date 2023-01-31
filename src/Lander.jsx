import './Lander.css'
import Grid2 from '@mui/material/Unstable_Grid2';



function Lander() {





  return (
    <div className="lander">

      <Grid2 container spacing={0}>
      <Grid2 item xs={12} className="desktophidden">
          <div className="name"><h1>STEFAN</h1><h1>LAUX</h1></div>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <img src="./images/lander.jpeg" alt="picture stefan laux" className='landerImg'/>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <div className="jobtitle"><h1>SOFTWARE</h1><h1>DEVELOPER</h1><h6>- FRONT END OBSESSED -</h6></div>
        </Grid2>
        <Grid2 item xs={12} sm={9} className="mobilehidden">
          <div className="name"><h1>STEFAN</h1><h1>LAUX</h1></div>
        </Grid2>
      </Grid2>

      
      
    </div>
  )
}

export default Lander
