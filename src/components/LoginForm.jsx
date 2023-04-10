import React, { useRef, useState } from "react";
import "../index.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LoginForm({ Login, error }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios.post("http://localhost:5000/users/login", user).then((response) => {
      console.log(response.data);
      // if (response.data == "Password valid!") {
      //   history.push("/edit");
      // }
      if (response.data == "Valid admin!") {
        history.push("/MenuAdmin");
      }
      if (response.data == "Valid user!") {
        history.push("/MenuClient");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <div className="form_in">
        <h2>Login</h2>
        {/*ERROR! */}

        <div className="formgroup">
          <label htmlFor="name"> Name: </label>
          <input
            type="name"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            placeholder="Type any name you want..."
          />
        </div>

        <div className="formgroup">
          <label htmlFor="email"> Email: </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            placeholder="Email..."
          />
        </div>

        <div className="formgroup">
          <label htmlFor="password"> Password: </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            placeholder="Password..."
          />
        </div>

        <div>
          <input type="submit" value="Login"></input>
        </div>

        <ul className="no-dot">
          <Link to="/register">
            <br></br>
            <br></br>
            <li>NU AI CONT ? CREEAZA ACUM UNUL</li>
          </Link>
        </ul>
      </div>
    </form>
  );
}

export default LoginForm;
