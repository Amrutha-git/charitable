import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";
import { Link } from "react-router-dom";

export default class showItems extends Component {
  state = {
    ngo: [],
    category: "",
  };

  componentDidMount = (async) => {
    this.setState({
      ngo: this.props.ngo,
     category: this.props.category,
    });
  };
  render() {
    const { _id, photo, name, phone } = this.state.ngo;

    // console.log(this.props);
    return (
      <Fragment>
        <div
          className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated"
          key={_id}
        >
          <div className="product-top">
            <img src={`${photo}`} className="img1" alt="" />
            <div className="product-bottom text-center">
              <h3>{name}</h3>
              {/* <h4>{this.state.category}</h4> */}

              <h4>{phone}</h4>

              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                data-toggle="modal"
                data-target="#quickModel"
              >
                Support
              </button>
            </div>
            <div className="overlay">
              <Link
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                to={{
                  pathname: "/donor/ShowNgo",
                  state: {
                    ngo: this.state.ngo,
                    cat: this.state.category,
                  },
                }}
              >
                <i className="fa fa-eye"></i>
              </Link>

              {/* <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                data-toggle=""
                data-target=""
              >
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <div className="product-bottom text-center"></div>
        </div>
      </Fragment>
    );
  }
}