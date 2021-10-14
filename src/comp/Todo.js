import React, { useEffect,useRef,  useState } from "react";
import './Form.css';


export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

 function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    props.editTask(props.id, newName);
     setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div >
      <span>New Name for {props.name}</span>
      <br/>
        <input  style={{height:"50px",width:"400px",border:"2px solid black"}}
       
          id={props.id}
          value={newName}
          onChange={handleChange}
        
         
        />
      </div>
      <div>
        <button style={{color:"black",backgroundColor:"white",width:"200px",height:"37px",marginTop:"10px"}}onClick={() => setEditing(false)}>Cancel</button>
        <button style={{color:"white",backgroundColor:"black",width:"200px",marginTop:"10px",
        height:"37px",marginLeft:"5px",border:"none"}} type="submit">Save</button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div >
      <div >
        <input style={{width:"30px",height:"30px",marginTop:"10px"}}
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label  htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div >
     
      
        <button style={{color:"black",backgroundColor:"white",width:"200px",height:"37px",marginTop:"10px"}}
          type="button"
          onClick={() => setEditing(true)}
         
         
        >
          Edit 
        </button>
        <button style={{color:"white",backgroundColor:"#cd4747",width:"200px",marginTop:"10px",
        height:"37px",marginLeft:"5px",border:"none"}}
          type="button"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete 
        </button>
        </div>
      </div>
    
  );



  return isEditing ? editingTemplate : viewTemplate;
}