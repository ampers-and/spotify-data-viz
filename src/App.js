import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
