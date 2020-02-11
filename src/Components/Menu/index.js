import React from "react";

import "./styles.css";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Simulador Solar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Financiamento
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Empresas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fazenda Solar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Energia Solar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Painel Solar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Guia Solar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cursos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fórum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Notícias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Loja
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
