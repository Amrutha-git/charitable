import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DonarsHome from "./DonarsHome";
// import fRegistration from "./Registration";
import DonarsNavbar from "./DonarsNavbar";
// import Category from "./Category";

function App() {
  return (
    <Router>
      <div className="">
        <DonarsNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/user/Home"} component={DonarsHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          {/* <Route exact path={"/user/Category"} component={Category} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;