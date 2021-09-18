import logo from './logo.svg';
import React from 'react';
import './App.css';
import  Users from './Component/Users.js';
import  Counter from './Component/Counter.js';
import  HeroName from './Component/HeroName.js';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>My First React App</h1>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus libero augue. In vitae feugiat elit. Mauris semper, massa id iaculis ornare, ligula mi feugiat risus, in bibendum quam diam at elit. Fusce venenatis augue id facilisis mollis. Maecenas sit amet pellentesque libero. Maecenas et erat elit. Pellentesque tempor arcu sed arcu vulputate, at volutpat felis malesuada. Duis facilisis iaculis ligula, vel imperdiet lectus. Vivamus sed viverra magna. Donec at dapibus lacus, nec ultrices nibh. Maecenas ultricies lorem eget lacinia fermentum. Aliquam in nisl ac urna sodales tincidunt. Maecenas elementum metus nec eros placerat, eu facilisis diam malesuada. 
        </p>
      </div>
    )
  }
}

class Footer extends React.Component {
  render(){
    return (
      <div className="footer">
        <p>&copy; My self - 2021</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <hr/>
        <Content/>
        <hr/>
        <Footer/>
        <hr />
        <Users />
        <hr/>
        <Counter/>
        <hr/>
        <HeroName/>
      </div>
    );
  }
}

export default App;
