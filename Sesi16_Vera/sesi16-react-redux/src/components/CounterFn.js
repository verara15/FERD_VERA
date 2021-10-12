import{
    useSelector,
    useDispatch
} from 'react-redux';
import {fetchUsers} from '../store/action';

const CounterFn = () =>{
    const state = useSelector ((state) => state)
    const dispatch =useDispatch()
    const increment= () =>{
        dispatch({
            type:"INCREMENT"
        })
    }
    const decrement= () =>{
        if(state.counter!==0){
            dispatch({
                type:"DECREMENT"
            }) 
        }
      
    }
    const customIncrement= () =>{
        dispatch({
            type:"CUST_INC",
            payload:10
        })
    }
    const customDecrement= () =>{
        if(state.counter>=10){
            dispatch({
                type:"CUST_DEC", 
                payload:10
            }) 
        }     
    }
    const handleFetchUsers = () =>{
        dispatch(fetchUsers())
    }
    return (
        <div className="demo">
            <h1>Functional Component Counter</h1>
            <h1 id="counter">{state.counter}</h1>
            <button id="cust_dec" onClick={customDecrement}>-10</button>
            &nbsp; &nbsp;
            <button id="decrement" onClick={decrement}>-</button>
            &nbsp; &nbsp;
            <button id="increment" onClick={increment}>+</button>
            &nbsp; &nbsp;
            <button id="cust_inc" onClick={customIncrement}>+10</button>
            <hr />
            <button onClick={handleFetchUsers}>Get Users</button>
            <br /><br />
            <table border="1" style={{margin:"0 auto"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users && state.users.map((user, idx) => {
                            return (
                                <tr key={idx}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                            );
                        })                  
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CounterFn;