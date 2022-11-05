import * as React from 'react';
import "../../CSS/Home.css"




export default function Home() {

   
    return (
        <div className='wrap' >

        <div className="header">

 <div className="nameTitle">
            <p>Stefan Laux</p>
          </div>
          <div className="nav">
          <p className='leftBtn'>&#60;Work /&#x3e; </p><p>|</p><p className='rightBtn'> &#60;About /&#x3e;</p>
          </div>

        </div>


         <div className='professionName'>
            <h1 className='underline'>CREATIVE</h1><h1 className='highlight'>DEVELOPER</h1>
         </div>
        </div>

    );
}