import { render } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import '../App.css';
import "./tabel.css";

export default function Magazine() {
  const [magazine, setMagazine] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/magazine/").then((response) => {
      setMagazine(response.data);
      console.log(magazine);
    });
  }, []);

  const renderUsers = () => {
    return (
      magazine &&
      magazine.map(
        ({ Nume, Localitate, Judet, Strada, Numar_Telefon }, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{Nume}</td>
              <td>{Localitate}</td>
              <td>{Judet}</td>
              <td>{Strada}</td>
              <td>{Numar_Telefon}</td>
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

      <h1 id="title">Magazine disponibile</h1>
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
        <td>DENUMIRE</td>
        <td>LOCALITATE</td>
        <td>JUDET</td>
        <td>ADRESA</td>
        <td>NUMAR TELEFON</td>
        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
}

// ReactDOM.render(<Magazine/>,document.getElementById('root'));
