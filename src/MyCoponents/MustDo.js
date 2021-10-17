import React from 'react'

export const MustDo = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4> {todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-dark" onClick={ ()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
