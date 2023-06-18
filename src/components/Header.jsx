import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [name, setName] = useState("Digite seu nome");

  function changeName() {
    let newName = prompt("por favor, insira seu nome");
    newName
      ? setName(`Olá, ${newName}`) : setName("por favor, insira seu nome");
  }
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light avatar-container" onClick={changeName}>
            <img
              src="/src/assets/photo.jpg"
              alt="Avatar"
              width="60"
              height="60"
              className="avatar-img d-inline-block align-text-top"
            />
           <span> {name}</span>
          </a>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
