import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowNgo from "./ShowNgo";
import ShowDonors from "./ShowDonors";
import AddNgo from "./addNgo";
import Category from "./Category";
import addUser from "./AddUser";
import showreview from "./showreview"
export default class Functions extends React.Component {
  state = {
    // users: [],
    ngo: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/Category",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getNgoDetail = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/ngo/ngo",
        config
      );
      this.setState({
        ngo: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };


  getngo = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/ngo`,
        config
      );
      this.setState({
        ngo: res.data.data,
      });
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />
          <Route
              exact
              path={"/main/addNgo"}
              render={(props) => (
                <AddNgo
                  {...props}
                  getNgoDetail={this.getNgoDetail}
                  getCategory={this.getCategory}
                  ngo={this.state.ngo}
                  category={this.state.category}
                />
              )}
            />
            <Route
              path={"/main/ShowNgo"}
              getngo={this.getngo}
              ngo={this.state.ngo}
              component={ShowNgo}
            />
          {/* <Route exact path={"/main/add"} component={Register} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          {/* <Route path={"/main/ShowNgo"} component={ShowNgo} /> */}
          <Route path={"/main/ShowDonors"} component={ShowDonors} />
          <Route path={"/main/category"} component={Category} />
          {/* <Route path={"/main/addNgo"} component={addNgo} /> */}
          <Route path={"/main/addUser"} component={addUser} />
          <Route path={"/main/showreview"} component={showreview} />
        </Switch>
      </div>
    </Router>
  );
  }
}


