import React from 'react';

export default class Halu_C extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=> response.json())
        .then((data) => this.setState({todos: data.slice(0,10)}))
    }
    render(){
        return(
            <div class="fetchC">
            <hr />
            <h1>FETCH [CLASS]</h1>
            <hr />
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {
                        this.state.todos.map((todo, index) =>(
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

}