import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      nume_complet: "",
      oras: "",
      judet: "",
      strada: "",
      nr_telefon: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  numecomplethandler = (event) => {
    this.setState({ nume_complet: event.target.value });
  };

  orashandler = (event) => {
    this.setState({ oras: event.target.value });
  };

  judethandler = (event) => {
    this.setState({ judet: event.target.value });
  };

  stradahandler = (event) => {
    this.setState({ strada: event.target.value });
  };

  nrtelefonhandler = (event) => {
    this.setState({ nr_telefon: event.target.value });
  };

  usernamehandler = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    const user = {
      username: this.state.username,
      password: this.state.password,
      numeComplet: this.state.nume_complet,
      Oras: this.state.oras,
      nrtelefon: this.state.nr_telefon,
      Judet: this.state.judet,
      Strada: this.state.strada,
    };
    console.log(this.state.nume_complet);
    alert("INFORMATII ADAUGATE CU SUCCES !");
    axios
      .post("http://localhost:5000/users/updateProfile", user)
      .then((response) => {
        console.log(response.data);
      });
    event.preventDefault();
    console.log(this.state);
    this.setState({
      username: "",
      nume_complet: "",
      oras: "",
      judet: "",
      strada: "",
      nr_telefon: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <br></br>
        <div className="form_in">
          <h2>Editare cont</h2>
          {/*ERROR! */}
          <div className="formgroup">
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.usernamehandler}
              value={this.state.username}
              placeholder="Username..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="nume_complet"> Full Name (Nume intreg): </label>
            <input
              type="text"
              name="nume_complet"
              id="nume_complet"
              onChange={this.numecomplethandler}
              value={this.state.nume_complet}
              placeholder="Nume intreg..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="oras"> Town (Oras): </label>
            <input
              type="text"
              name="oras"
              id="oras"
              onChange={this.orashandler}
              value={this.state.oras}
              placeholder="Oras..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="judet"> County (Judet): </label>
            <input
              type="text"
              name="judet"
              id="judet"
              onChange={this.judethandler}
              value={this.state.judet}
              placeholder="Judet..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="strada"> Street (Strada): </label>
            <input
              type="text"
              name="strada"
              id="strada"
              onChange={this.stradahandler}
              value={this.state.strada}
              placeholder="Strada..."
            />
          </div>

          <div className="formgroup">
            <label htmlFor="telefon"> Phone number (Numar telefon): </label>
            <input
              type="text"
              name="telefon"
              id="telefon"
              onChange={this.nrtelefonhandler}
              value={this.state.nr_telefon}
              placeholder="Numar telefon..."
            />
          </div>

          <div>
            <input type="submit" value="Edit"></input>
          </div>
        </div>
      </form>
    );
  }
}

export default EditForm;
