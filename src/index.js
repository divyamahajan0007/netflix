import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import sdata from "./sdata";


ReactDOM.render(
  <>

  <h1 className="h1_style"> The Top Most Series On Netflx </h1>
      
      <Card imgsrc={sdata[0].imgsrc}
        title={sdata[0].title}
         sname={sdata[0].sname}
         link={sdata[0].link}
      />
      <Card imgsrc={sdata[1].imgsrc}
        title={sdata[1].title}
         sname={sdata[1].sname}
         link={sdata[1].link} /> 

      <Card  imgsrc={sdata[2].imgsrc}
        title={sdata[2].title}
         sname={sdata[2].sname}
         link={sdata[2].link}/>

      <Card  imgsrc={sdata[3].imgsrc}
        title={sdata[3].title}
         sname={sdata[3].sname}
         link={sdata[3].link}/>

      <Card  imgsrc={sdata[4].imgsrc}
        title={sdata[4].title}
         sname={sdata[4].sname}
         link={sdata[4].link}/>

      <Card  imgsrc={sdata[5].imgsrc}
        title={sdata[5].title}
         sname={sdata[5].sname}
         link={sdata[5].link}/>
      
  </> , document.getElementById('root')
);

