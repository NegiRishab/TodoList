import React from 'react'
import classes from './Button.module.css'

export default function Button(props) {

  const AddTask=()=>{
  
    props.handle();
  }
  return (
    <button className={`${props.className} ${classes.button} `} onClick={AddTask}>
      {props.children}
    </button>
  )
}
