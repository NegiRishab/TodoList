import React, { useState } from "react";
import classes from "./Form.module.css";
import Button from "./Util/Button";
import Card from "./Util/Card";

export default function Form(props) {

   const[newTask,setnewTask]= useState("");


  const handleFormSubmit = (event) => {
      event.preventDefault();
      props.onAdd(newTask);
      setnewTask('');
  };

  const handlenewTask=(event)=>{
     
   setnewTask(event.target.value)
  }

  return (
    <Card className={classes.input}>
    
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="Task">TASK</label>
          <input
            id="Task"
            type="text"
            value={newTask}
            onChange={handlenewTask}
          />
          <button type="submit">Add Task</button>
         
        </form>
     
      
    </Card>
    
  );
}
