import React, { Component, useState, Fragment } from "react";
import "./CSS/App.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    // this.getUser = this.getUser;
    this.state = {
      email: "",
      password: "",
      type: "",
      isAuth: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
    });
  }

  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // Login
  onSubmit = async (e) => {
    e.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    const body = JSON.stringify(login);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(body);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/auth/login`,
        body,
        config
      );
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      // console.log(sessionStorage);
      this.setState({
        isAuth: true,
      });
    } catch (error) {
      alert("Error Login!!");
    }
  };

  render() {
    const type = this.state.type;
    // console.log(type);
    let social = {};
    let signup, login;
    // if (type === "user") {
    //   social = "#ffc312";
      signup = <a href={`/signup/${type}`}>Sign Up</a>;
    // } else {
    //   social = "#49b5e7";
    //   signup = <a href={`/fsignup`}>Sign Up</a>;
    // }
    console.log(type);

// import React, { Component } from "react";
// import "./CSS/App.css";

// class Login extends Component {
//   state = {
//     username: "",
//     password: "",
//     type: "",
//   };
//   componentDidMount() {
//     this.setState(() => ({
//       type: this.props.match.params.type,
//     }));
//   }
//   onChange(e) {
//     this.setState({ username: e.target.value });
//     this.setState({ password: e.target.value });
//     // console.log("123");
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.username === "") {
//       // this.props.setAlert("Please Enter Something", "light");
//       console.log(this.state.username);
//     } else {
//       console.log(this.state.username);

      // this.props.searchUser(this.state.text);
      // this.setState({ text: "" });
  //   }
  // };
  // render() {
  //   // console.log(this.props.match.params);
  //   // const { type } = this.props.match.params;
  //   const username = this.state.username;
  //   const password = this.state.password;
  //   const { type } = this.state.type;
  //   let social = {};
  //   let signup, login;
  //   if (type === "user") {
  //     social = "#12055c";
  //     signup = <a href={`/signup`}>Sign Up</a>;
  //   } else {
  //     social = "#d48b04";
  //     signup = <a href={`/fsignup`}>Sign Up</a>;
  //   }
    // if (type === "user") {
    //   if (username == "") {
    //     social = "#12055c";
    //     login = (
    //       <a href={`/user/Home`} style={{ textDecoration: "none" }}>
    //         Login
    //       </a>
    //     );
    //   } else {
    //     console.log("err");
    //   }
    // } else {
    //   if (username == "") {
    //     social = "#d48b04";
    //     login = (
    //       <a href={`/vendor/Home`} style={{ textDecoration: "none" }}>
    //         Login
    //       </a>
    //     );
    //   }
    // }

    return (
      <Fragment>
        {this.state.isAuth ? (
          type == "donar" ? (
            <Redirect isAuth={this.state.isAuth} to="/donor/Home" />
          ) : type == "ngo" ? (
            <Redirect isAuth={this.state.isAuth} to="/Admin/ngo" />
          ) : type == "admin" ? (
            <Redirect isAuth={this.state.isAuth} to="/main/Home" />
          ) : (
            <Redirect isAuth={this.state.isAuth} to="/" />
          )
        ) :(
      <div className="container logintop ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className=" " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
              
                <div className="card animated bounce" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5"> {type} Sign In </h3>
               
                  </div>
                  <div className="card-body">
                    
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                              type="text"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="password"
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                      </div>

                      <div className="form-group ">
                      <button
                              type="submit"
                              value="Login"
                              name="submit"
                              className="btn float-right login_btn btn-block "
                              style={{
                                backgroundColor: social,
                              }}
                            >
                              Login
                            </button>
                      </div>
                    </form>
                  </div>
                  <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      Don't have an account?
                      {signup}
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="/reset">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )};
    </Fragment>
    )
}
}

export default Login;
