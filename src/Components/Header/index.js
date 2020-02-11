import React from "react";

import Menu from "../Menu";

import "./styles.css";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <img className="brand"
          src="https://www.portalsolar.com.br/wp-content/themes/portalsolar-bootstrap-based/assets/images/logo.png"
          alt=""
        />

        <nav className="navbar navbar-light bg-light">
          <form>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            ></input>
          </form>
        </nav>

        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Central de Atendimento
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p className="dropdown-item">
              Não encontrou o produto? Entre em contato conosco!
            </p>
            <a className="dropdown-item" href="#">
              (11) 5090-5560
            </a>
            <a className="dropdown-item" href="#">
              (11) 99988-8967
            </a>
            <a className="dropdown-item" href="#">
              vendas@portalsolar.com.br
            </a>
            <a className="dropdown-item" href="#">
              financiamento@portalsolar.com.br
            </a>
          </div>
        </div>

        <img className="login"
          src="https://www.portalsolar.com.br/wp-content/themes/portalsolar-bootstrap-based/assets/images/menu/login-svg.svg"
          alt=""
        />
      </div>
      <div>
        <Menu />
      </div>
    </>
  );
}

export default Header;
