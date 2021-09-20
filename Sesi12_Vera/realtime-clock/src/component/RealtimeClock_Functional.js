import React, {useState} from 'react';

function RealtimeClock_Functional() {
  const [date, setDate] = useState(new Date())
  function tick(){
    setDate (new Date())
  }
  setInterval(() =>tick(), 1000)
  return(
    <div className="App functional">
      <hr />
      <h1>Realtime CLOCK [Functional]</h1>
      <hr />
      <h1>Time = {date.toLocaleTimeString()}</h1>
      <h1>Date = {date.toLocaleDateString()}</h1>
    </div>
    
  );
}

export default RealtimeClock_Functional;
