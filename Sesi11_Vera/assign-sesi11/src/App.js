import './App.css';
import React, {useState,useEffect} from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Simulasi Antrian</h1>
    </header>
  );
}

function Content() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);

  //function mengambil nilai input
  let handleChange = (e)=> {
    setValue(e.target.value);
  }

  //function button antrikan
  let antrikan = (e) =>{
    e.preventDefault();
    if(arr.includes(value)){
      alert('Nama sudah ada, silahkan input lagi')
    }else{
      setArr(arr.concat(value));
    }
  }

  //function button majukan
  let majukan = (e) =>{
    e.preventDefault();
    if (arr.length>0){
      setArr(arr.splice(1));
    }else{
      alert('Tidak bisa majukan karena antrian sudah kosong');
    } 
  }

  console.log(arr);
  return (
  <div className="content">
      <form >
        <label>Masukkan Nama</label><br></br>
        <p>{value}</p>
        <input type="text"  value={value} onChange={handleChange}></input><br></br>
        <button onClick= {antrikan} disabled={!value}> Antrikan!</button>
        <button onClick={majukan}>Majukan!</button>
      </form>
      <hr />
      {(arr.length<=0)?
        <p>[ Antrian Kosong !]</p>:
        arr.slice(0).reverse().map((antri, index) =>
        (index==arr.length-1)?
        <span><h1 id="fifo" key={index}>{antri}</h1></span>:
        <span>
          <h1 id="fifo" key={index}>{antri}</h1>
          <span id="panah">={'>'}</span>
        </span>)
      }
  </div>
  );  
}

function App() {
  useEffect(() => {
        //memperbarui judul dokumen menggunakan API browser
        document.title = `FIFO`;
    });
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Content/>
      <hr/>
    </div>
  );
}

export default App;
