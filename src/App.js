import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./HomePage/home";
import Portfolio from "./PortfolioPage/portfolio";
import Contact from "./ContactPage/contact";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
