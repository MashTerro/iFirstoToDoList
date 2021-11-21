import React, { useState } from 'react';

export const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be blank!!");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">

            <h3 className="my-3 text-center">MAKE YOUR LIST</h3>
            <img className="my-4 text-center" src="https://source.unsplash.com/1400x400/?black,pen" class="img-fluid" />
            <div className="container my-3"></div>
            {/* <h3 className="my-3 text-center" >Add your ToDos</h3> */}
            {/* <button className="btn btn-sm btn-dark" >Delete</button> */}

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" >WORK TITLE</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">WORK DESCRIPTION</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-dark">Add ToDo</button>
            </form>
        </div>
    )
}
