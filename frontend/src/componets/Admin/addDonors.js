import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      name: "",
      address: "",
      mname: "",
      email: "",
      description: "",
      oname:"",
      type:"",
      age:"",
      phone:"",
      website:"",
      file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handlerDropdownChange = this.handlerDropdownChange.bind(this);
  }
  componentDidMount() {
    this.props.getCategory();
    this.props.getNgoDetail();
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ type: e.target.value });
  }
  //dropdown ngo
  handlerDropdownChange(e) {
    this.setState({ name: e.target.value });
  }
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/ngo/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const ngo = {
        name: this.state.name,
        address: this.state.address,
        mname: this.state.mname,
        email: this.state.email,
        description: this.state.description,
        oname: this.state.oname,
        category: this.state.type,
        age: this.state.age,
        phone: this.state.phone,
        website: this.state.website,
        photo: res.data.data,
      };
      const body = JSON.stringify(ngo);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/ngo`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`Ngo detail Added ${result.data.data.name}`);
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title text-dark">Add Details</h2>
                  </div>
                  <div class="card-body">
                    <form 
                    onSubmit={this.onSubmit} 
                    enType="multipart/form-data">
                    <div className="form-row frow">
                        <div className="name">Select Ngo:</div>
                      
                        <select
                          id="dropdown "
                          className="btn bg-success"
                          onChange={this.handlerDropdownChange}
                        >
                          <option value="no cat">None</option>
                          {this.props.ngo.map((name) => (
                            <option key={name._id} value={name.name}>
                              {name.name}
                            </option>
                          ))}
                          {/* <option value="N/A">N/A</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option> */}
                        </select>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Ngo Address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="address"
                              value={this.state.address}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Manager Name</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="mname"
                              value={this.state.mname}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Email</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Ngo Description</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="description"
                              value={this.state.description}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Orphans Name</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="oname"
                            value={this.state.oname}
                            onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Select Category:</div>
                        {/* <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Category
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.props.category.map((category) => (
                              <Dropdown.Item key={category._id}>
                                {category.catname}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown> */}
                        <select
                          id="dropdown "
                          className="btn bg-success"
                          onChange={this.handleDropdownChange}
                        >
                          <option value="no cat">None</option>
                          {this.props.category.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type.catname}
                            </option>
                          ))}
                          {/* <option value="N/A">N/A</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option> */}
                        </select>
                      </div>
                     
                      <div class="form-row frow">
                        <div class="name">Age</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="age"
                              value={this.state.age}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Ngo Contact</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Upload Image:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file"
                              id="file"
                              onChange={this.onChangeHandler}
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Ngo website</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="website"
                              value={this.state.website}
                              onChange={this.onChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                     
                     
                     
                      <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      Submit
                    </button>
                  </div>
                    </form>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
