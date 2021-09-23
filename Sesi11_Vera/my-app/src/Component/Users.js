import React from 'react';

export default class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      username:'user',
      number:0
    }
  }

  getUsername(){
      return `${this.state.username}${this.state.number}`
  }

  setUsername=()=>{
    this.setState(
        {username: this.state.username, 
          number: this.state.number+1}
    )
  }


  resetUsername=()=>{
    this.setState(
        {username: 'user',
        number: 0}
    )
  }

  render() {
    return (
        <div>
            <h1 className="wrn">{this.getUsername()}</h1>
            <br/>
            <button onClick={this.setUsername}> Set Username</button>
            <button onClick={this.resetUsername}> Reset Username</button>
        </div>
      

    )
  }
}

