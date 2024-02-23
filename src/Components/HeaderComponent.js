import './Component.css';

import logo from "./TicTacToe.svg";

import React from "react";

function HeaderComponent() {
  return (
    <header>
        <p>
            <img src={logo} alt='Tic-Tac-Toe' />
        </p>
    </header>
  );
}

export default HeaderComponent;
