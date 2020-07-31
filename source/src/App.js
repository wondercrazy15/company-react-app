import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
// Pages
import Company from "./pages/company/company.jsx"
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/main.css";
const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
        <Router history={customHistory}>
            <Route exact path="/create-company" component={Company} />
        </Router>
    );
  }
}
export default App;

