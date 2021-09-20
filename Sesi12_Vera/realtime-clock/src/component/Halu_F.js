import React, {useEffect, useState} from 'react';
import '.././App.css';

export default function Halu_F() {
    const [todos, setTodos] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(10,20)))
    })

    return (
        <div class="fetchF">
            <hr />
            <h1>FETCH [FUNCTION]</h1>
            <hr />
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>(
                            <tr key = {index}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "v" : "x"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
