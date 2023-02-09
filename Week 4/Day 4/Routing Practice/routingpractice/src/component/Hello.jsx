import React from "react";
import { useParams } from "react-router-dom";
    
const Hello = (props) => {
  const { Hello, color , bgcl } = useParams();
  return (
    <div>
        <h1 style={{color: color, background: bgcl}}>The word is: {Hello}</h1>
    </div>
  );
}


    
export default Hello