import React, {useState} from 'react';
import './App.css';
import RealtimeClock_Class from './component/RealtimeClock_Class';
import RealtimeClock_Functional from './component/RealtimeClock_Functional';
import Halu_F from './component/Halu_F';
import Halu_C from './component/Halu_C';
function App() {
  return(
    <div className="App">
      <RealtimeClock_Class/>
      <RealtimeClock_Functional/>
      <Halu_C/>
      <Halu_F/>
    </div>
  );
}

export default App;
