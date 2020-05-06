import React, { Component } from "react";

export default class QuickModel extends Component {
  state = {
    ngo: {},
    category: "",
  };

  componentDidMount = (async) => {
    this.setState({ ngo: this.props.location.state.ngo });
    this.setState({ category: this.props.location.state.cat });
  };
  render() {
    console.log(this.state.specialization);
    const {
        name,
        // address,
        mname,
        email,
        description,
        oname,
        type,
        age,
        phone,
        // website,
        photo,
    } = this.state.ngo;
    // console.log);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  ">
              <div className="page-title text-center">
                <h1 className="text-dark">Ngo Details</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>

              <div className="" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container ">
                  <div className=" tabletrans ">
                    <div className="well">
                      {/* <div className="row mb-5"></div> */}
                      <div className="card">
                        <div className="container-fliud  ">
                          <div className="wrapper row mb-4">
                            <div className="preview col-md-6 mt-4">
                              <div className="preview-pic tab-content ">
                                <img
                                  src={photo}
                                  alt="img1"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="details col-md-6">
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className="product-title mb-5">{name}</h3>
                              <i>
                                <h4>{this.state.category}</h4>
                                
                                <h4>{email}</h4>
                                <h4>Manager: {mname}</h4>
                                <h4>Description: {description}-Years</h4>
                                <h4>Support Seeker name: {oname}</h4>

                                <h4>Type: {type}</h4>
                                <h4>Age: {age}</h4>
                                <h4>Contact: {phone}</h4>
                              </i>
                              <div className="action ">
                                <button
                                  className="add-to-cart btn btn-warning"
                                  type="button"
                                >
                                  Donate
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}