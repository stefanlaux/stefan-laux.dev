import './Skills.css'
import Grid2 from '@mui/material/Unstable_Grid2';


function Skills() {





    return (
        <div className="work">
            <h1>SKILLS</h1>

    
  <Grid2 className={"grid2"} container spacing={2}>
      <Grid2 item xs={3}>
        Column 1, Row 1
      </Grid2>
      <Grid2 item xs={3}>
        Column 2, Row 1
      </Grid2>
      <Grid2 item xs={3}>
        Column 3, Row 1
      </Grid2>
      <Grid2 item xs={3}>
        Column 4, Row 1
      </Grid2>
      <Grid2 item xs={3}>
        Column 1, Row 2
      </Grid2>
      <Grid2 item xs={3}>
        Column 2, Row 2
      </Grid2>
      <Grid2 item xs={3}>
        Column 3, Row 2
      </Grid2>
      <Grid2 item xs={3}>
        Column 4, Row 2
      </Grid2>
    </Grid2>
    
    <div className="blob2"><img src="./images/blob2.png" alt="blob2" /></div>
    <div className="blob1"><img src="./images/blob1.png" alt="blob1" /></div>

        </div>
    )
}

export default Skills
