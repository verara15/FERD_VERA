import  React, {useState, useEffect} from 'react';

export default function Example() {
    const [count, setCount] = useState(0);

    //Mirip dengan componentDidMount dan componentDidUpdate:
    useEffect(() => {
        //memperbarui judul dokumen menggunakan API browser
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}