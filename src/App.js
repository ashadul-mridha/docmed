import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import NotFound from './Components/Pages/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import DeptDetails from './Components/Pages/DeptDetails/DeptDetails';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';


function App() {
  return (
    <div>
      <Router>
            <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/appoinment/:deptId">
            <DeptDetails></DeptDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
            <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
