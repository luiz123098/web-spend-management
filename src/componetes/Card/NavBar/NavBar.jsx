/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";

const NavBarCard = () => {

    return (
        <div>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            {/* Logo/button da navBar */}
            <div className="navbar-brand">              
              <a className="navbar-item fa-2x" href="/">
                <span style={{color: 'orange'}}>
                  <i className="fas fa-vault "></i>
                </span>
              </a>
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => {
                  const burger = document.querySelector('.navbar-burger');
                  const menu = document.querySelector('.navbar-menu');
                  burger.classList.toggle('is-active');
                  menu.classList.toggle('is-active');
                }}
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

          <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* Botoes da navbar */}
            <a className="navbar-item" href="/">              
              <span className="icon-text">
                  <i className="fas fa-home"></i>              
              </span>
            </a>

            <a className="navbar-item" href="/">
              <i class="fa-solid fa-mobile-button"></i>
            </a>

            <a className="navbar-item" href="/">
              <i class="fas fa-cog"></i>
            </a>            
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="navbar-item" href="/about">
                  <i class="fa-solid fa-circle-exclamation"></i>
                </a>
                <a className="button is-ghost has-text-white" href="/signup">
                  <strong>Sign up</strong>
                </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>                  
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
  );
};

export default NavBarCard;