import './App.css';
import React,{useEffect} from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  useEffect(() => {
    document.title = "KanbanBoard-Vera";
  }, []);
  return (
    <div className="container-fluid">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
