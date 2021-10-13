import React, { useState } from "react";
import './Form.css';

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
    <h2 className="label-wrapper">
      <label >
          What needs to be done?
        </label>
      </h2>
      <br/>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <br/>
      <div className="btn">
      <button type="submit" >
      Add
    </button>
      </div>
     
    </form>
    </div>
   
    </>
  );
}

export default Form;