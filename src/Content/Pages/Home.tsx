import * as React from 'react';
import "../../CSS/Home.css"
import { useInView } from 'framer-motion';
import { useEffect } from 'react';
import { animate } from 'motion';



export default function Home() {

  const refTitle = React.useRef(null);
  const isInViewTitle = useInView(refTitle);

  

useEffect(() => {
    if (isInViewTitle) {
      
    }
  }, [isInViewTitle]);
   
    return (
        <div className='wrap' >

        <div className="header">

 <div className="nameTitle">
            <p>Stefan Laux</p>
          </div>
          <div className="nav">
           
            <p className='leftBtn'>&#60;Work /&#x3e; </p>
            <p>|</p>
            <p className='rightBtn'> &#60;About /&#x3e;</p>
      
          </div>

        </div>


        <h1 className='m19'>
          <span className='text-wrapper'>
            <span className='letters professionName'>
              <h3 className='underline'>CREATIVE</h3><h3 className='highlight'>DEVELOPER</h3>
              </span>
          </span>
        </h1>
  

      

        </div>

    );
}