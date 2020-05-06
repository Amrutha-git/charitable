import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class ShowDonors extends Component {
  state = {
    ngo: [],
  };
  componentDidMount = async () => {
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
      console.log(this.state.ngo);
    } catch (err) {
      // console.log("Can't load the items");
    }
    // this.props.getngo();
    // console.log(this.props.params);
  };
  // getproducts = async () => {
  //   const token = sessionStorage.getItem("token");

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(
  //       ` http://localhost:5000/api/v1/ngo`,
  //       config
  //     );
  //     this.setState({
  //       products: res.data.data,
  //     });
  //     console.log(res.data.data);
  //   } catch (err) {
  //     // console.log("Can't load the items");
  //   }
  // };
  render() {
    console.log(this.props.ngo);
    return (
      <div>
        <section>
          <div id="portfolio">
            <div class="container showtop   ">
              <div class="page-title text-center">
                <h1>Donors</h1>

                <hr class="pg-titl-bdr-btm" />
              </div>
              <div class="row">
                <div class="col-lg-12 ">{/* categotize */}</div>
              </div>

              <div class="row" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div class="container pt-4">
                  <div class=" tabletrans ">
                    <div class="well">
                      
                      <table class="table table-hover">
                     
                        <tr>
                          <th>
                            <label>Ngo Profile</label>
                          </th>
                          <th>
                            {" "}
                            <label>Name</label>
                          </th>
                          <th>
                            {" "}
                            <label>Address</label>
                          </th>
                          <th>
                            {" "}
                            <label>Contact No</label>
                          </th>

                         
                        </tr>
                        {this.state.ngo.map((ngos) => (
                        <tr>
                          <td className="tbld">
                            <img
                              src={ngos.photo}
                              alt=""
                              width="150px"
                              height="100px"
                            ></img>
                            
                          </td>
                          <td className="tbld">{ngos.name}</td>
                          <td className="tbld">{ngos.address}</td>
                          <td className="tbld">{ngos.oname}</td>

                          <td className="d-flex justify-content-center tbld">
                     
                          </td>
                        </tr>
                      ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* <div class="row" id="" style={{ opacity: 1 }}>
                
                <div class="container pt-4">
                  <div class=" tabletrans ">
                    <div class="well">
                      
                      <table class="table table-hover">
                        <tr>
                          <th>
                            <label>Donors Profile</label>
                          </th>
                          <th>
                            {" "}
                            <label>Name</label>
                          </th>
                          <th>
                            {" "}
                            <label>Address</label>
                          </th>
                          <th>
                            {" "}
                            <label>Contact No</label>
                          </th>

                         
                        </tr>

                        <tr>
                          <td className="tbld">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                              alt=""
                              width="150px"
                              height="100px"
                            ></img>
                            
                          </td>
                          <td className="tbld">Amrutha</td>
                          <td className="tbld">abcdefghijkl</td>
                          <td className="tbld">000000000</td>

                          <td className="d-flex justify-content-center tbld">
                     
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row" id="" style={{ opacity: 1 }}>
                
                <div class="container pt-4">
                  <div class=" tabletrans ">
                    <div class="well">
                      
                      <table class="table table-hover">
                        <tr>
                          <th>
                            <label>Donors Profile</label>
                          </th>
                          <th>
                            {" "}
                            <label>Name</label>
                          </th>
                          <th>
                            {" "}
                            <label>Address</label>
                          </th>
                          <th>
                            {" "}
                            <label>Contact No</label>
                          </th>

                         
                        </tr>

                        <tr>
                          <td className="tbld">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                              alt=""
                              width="150px"
                              height="100px"
                            ></img>
                            
                          </td>
                          <td className="tbld">Amrutha</td>
                          <td className="tbld">abcdefghijkl</td>
                          <td className="tbld">000000000</td>

                          <td className="d-flex justify-content-center tbld">
                     
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
