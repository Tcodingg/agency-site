import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  function BurgerMenu() {
    if (toggle === true) {
      setToggle(false);
      console.log("toggle true");
    } else if (toggle === false) {
      setToggle(true);
      console.log("toggle false");
    }
  }
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>
            <a href="/">LOGO</a>
          </h1>
        </div>
        <div className="burger" onClick={BurgerMenu}>
          <i
            class={toggle ? "fa fa-bars" : "fa fa-times"}
            aria-hidden="true"
          ></i>
        </div>
        <nav onClick={BurgerMenu}>
          <ul className={toggle ? "menu" : "menu active"}>
            <Link to="/">
              <li>HOME</li>
            </Link>

            <Link to="/services">
              <li>
                SERVICE
                <div className="dropdown">
                  <ul>
                    <Link to="/about">
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                    </Link>
                    <li>
                      <a href="#">Link 2</a>
                    </li>
                    <li>
                      <a href="#">Link 3</a>
                    </li>
                  </ul>
                </div>
              </li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
          </ul>
        </nav>
      </header>
      <hr
        style={{
          width: "80%",
          margin: "0 auto",
          color: "#eee9e9",
          height: "1px",
        }}
      />
    </div>
  );
}
