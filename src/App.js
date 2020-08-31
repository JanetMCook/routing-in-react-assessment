import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import NotFound from "./components/notfound/NotFound";

function App() {
    return (
      <div className="App">

        <Navigation /> 

      <Switch>     
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Home" />}
        />

        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />

        <Route 
          exact
          path="/clock" 
          component={Clock} 
        />

        <Route
          exact 
          path="/contact" 
          component={Contact} 
        />

        <Route
          component={NotFound}
        />

      </Switch>
      
      </div>
    );
  }

export default App;
