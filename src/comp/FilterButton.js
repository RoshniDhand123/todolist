import React from "react";
import './Form.css';

function FilterButton(props) {
  return (
      <>
   
      <button style={{backgroundColor:"white",color:"black" ,width:"150px",margin:"5px",height:"40px",marginLeft:"30px"}}
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
     
    </button>
  
      

    </>
  );
}

export default FilterButton;