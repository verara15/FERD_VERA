import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

export default function Users(){
    const [todos, setTodos] =useState([]);
    let history= useHistory();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(0,10)))
    })

    return (
        
        <div className="container">  
            <button className="btn btn-success btn-md mb-4" role="button" onClick={()=>{
                history.push("/");
            }}>Back to Home</button>
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>(
                            <tr key = {index}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.username}</td>
                                <td>{todo.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}