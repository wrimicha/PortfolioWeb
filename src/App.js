import logo from "./logo.svg";
import "./styles/App.css";
import Nav from "./nav/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./Pages/home";
import Portfolio from "./Pages/portfolio";
import Contact from "./Pages/contact";
import ViewProject from "./Pages/ViewProject";

function App() {
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/viewproject/:id" component={ViewProject} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
