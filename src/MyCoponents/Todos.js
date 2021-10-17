import React from 'react'
import {MustDo} from "./MustDo";

export const Todos = (props) => {
    let myStyle = {
        minHeight:"70vh",
        margin:"40px auto"
    }
    
    return (
        <div className="container my-4" style={myStyle}>
          <h3 className="my-3 text-center">To Dos List</h3>
          {props.todos.length===0? "No work left To Do": 
         props.todos.map((todo)=>{
           
           return (
            <MustDo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
           )
         })
        }  
        </div>
    )
}
