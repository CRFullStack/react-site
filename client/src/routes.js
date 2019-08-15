import React from "react";
import App from "./app/App";
import Contact from "./grid_contact/contact";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path="/contact" component={Contact} />
      {/**future routes 
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
        */}
    </Switch>
  );
}

export default Routes;
