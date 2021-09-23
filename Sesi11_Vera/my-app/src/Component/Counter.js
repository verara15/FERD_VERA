import React, { useState} from 'react';



export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
        Count:{count} <br></br>
        <button onClick={ () => setCount(0)}>Reset</button>
        <button onClick={ () => setCount(prevcount => prevcount -1)} disabled={!count}>-</button>
        <button onClick={ () => setCount(prevcount => prevcount +1)}>+</button>
        <div>
            <p>Anda menekan sebanyak {count} kali</p>
            <button onClick={()=> setCount(count+1)}>
                Klik saya
            </button>
        </div>
        </>
    );
}


