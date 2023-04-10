import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailhandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordhandler = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    const user = {
      username: this.state.email,
      password: this.state.password,
    };
    alert("INREGISTRAT CU SUCCES !");
    console.log(this.state);
    this.setState({
      name: "",
      password: "",
    });
    axios.post("http://localhost:5000/users/add", user).then((response) => {
      console.log(response.data);
    });

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <br></br>
        <div className="form_in">
          <h2>Register</h2>
          {/*ERROR! */}

          <div className="formgroup">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.emailhandler}
              value={this.state.email}
              placeholder="Email..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.passwordhandler}
              value={this.state.password}
              placeholder="Password..."
            />
          </div>

          <div>
            <input type="submit" value="Register"></input>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
