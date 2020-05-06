import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DonorsHome from "./DonorsHome";
// import fRegistration from "./Registration";
import DonorsNavbar from "./DonorsNavbar";
import Category from "./Category";
import Ngo from "./Ngo";
import QuickModel from "./QuickModel";
// import AddDonors from "./addDonors";
// import showDonors from "./ShowDonors";
// import Prof from "./Prof";
// import ProfileEdit from "./ProfileEdit";
// import orders from "./orders";
export default class Functions extends React.Component {
  state = {
     users: [],
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
  // getNgoDetail = async () => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:5000/api/v1/ngo/ngo",
  //       config
  //     );
  //     this.setState({
  //       ngo: res.data.data,
  //     });
  //   } catch (err) {
  //     console.log("Can't load the items");
  //   }
  // };


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
          <DonorsNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            {/* <Route exact path={"/Donars/Home"} component={DonorsHome} /> */}
            {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}

            <Route
              exact
              path={"/donor/Home"}
              render={(props) => (
                <DonorsHome
                  {...props}
                  getngo={this.getngo}
                  user={this.state.user}
                  // getCategory={this.getCategory}
                  ngo={this.state.ngo}
                  // category={this.state.category}
                />
              )}
            />
            <Route
              path={"/donor/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getngo={this.getngo}
                  getCategory={this.getCategory}
                  ngo={this.state.ngo}
                  category={this.state.category}
                />
              )}
            
            />
            {/* <Route
              path={"/vendor/showItems"}
              render={(props) => (
                <showI
                  getproducts={this.getproducts}
                  // getCategory={this.getCategory}
                  products={this.state.products}
                  // category={this.state.category}
                />
              )}
            /> */}
            <Route path={"/donor/ngo"} component={Ngo} />
            <Route path={"/donor/showNgo"} component={QuickModel} />
           
          </Switch>
        
        </div>
      </Router>
    );
  }
}


// function App() {
//   return (
//     <Router>
//       <div className="">
//         <AdminNavbar />
//         {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

//         <Switch>
//           <Route exact path={"/admin/AdminHome"} component={AdminHome} />
//           {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
//           <Route path={"/admin/addDonors"} component={addDonors} />
//           <Route path={"/admin/showDonors"} component={showDonors} />
//           <Route path={"/admin/Profile"} component={Prof} />
//           <Route path={"/admin/ProfileEdit"} component={ProfileEdit} />
//           <Route path={"/admin/orders"} component={orders} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
