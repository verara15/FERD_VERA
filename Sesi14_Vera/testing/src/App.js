import Home from './Pages/Home'
import Users from './Pages/Users'
import Header from './component/Header';
import Footer from './component/Footer';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users}/>
        </Switch>
        <Footer/>
      </Router>  
    </>
  );
}

export default App;
