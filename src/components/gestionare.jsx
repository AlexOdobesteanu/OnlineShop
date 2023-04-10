import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import '../App.css';
import "./tabel.css";
import axios from "axios";

export default function Gestionare() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/users/").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  }, []);

  const renderUsers = () => {
    return (
      users &&
      users.map(
        (
          {
            type,
            username,
            password,
            numeComplet,
            Oras,
            nrtelefon,
            Judet,
            Strada,
          },
          index
        ) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{type}</td>
              <td>{username}</td>
              <td>{password}</td>
              <td>{numeComplet}</td>
              <td>{Oras}</td>
              <td>{nrtelefon}</td>
              <td>{Judet}</td>
              <td>{Strada}</td>
            </tr>
          );
        }
      )
    );
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <h1 id="title">Utilizatori</h1>
      <br></br>
      <br></br>
      <table
        style={{
          borderWidth: "1px",
          borderColor: "#aaaaaa",
          borderStyle: "solid",
        }}
        id="magazine"
      >
        <td>ID</td>
        <td>ROL</td>
        <td>EMAIL</td>
        <td>PAROLA</td>
        <td>NUME COMPLET</td>
        <td>LOCALITATE</td>
        <td>NUMAR TELEFON</td>
        <td>JUDET</td>
        <td>STRADA</td>

        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
}

// ReactDOM.render(<Magazine/>,document.getElementById('root'));
