import React from 'react';

class RealtimeClock_Class extends React.Component{
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  componentDidMount() {
    this.timerID =setInterval(()=>this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render(){
    return (
      <div className="App class">
        <hr /> 
        <h1>Realtime CLOCK [Class]</h1>
        <hr />
        <h1>Time = {this.state.date.toLocaleTimeString()}</h1>
        <h1>Date = {this.state.date.toLocaleDateString()}</h1>
      </div> 
    );
  }
}

export default RealtimeClock_Class;
