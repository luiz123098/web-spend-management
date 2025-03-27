/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import LogInCard from "../LogIn/LogInCard.jsx";
import SingInCard from "../SingIn/SingInCard.jsx";
import "./NavBar.css";

const NavBarCard = () => {
  // Estado para controlar a visibilidade dos modais
  const [isModalOpen, setIsModalOpen] = useState(false); // Log In
  const [isModalOpenSing, setIsModalOpenSing] = useState(false); // Sign In

  // Métodos para abrir e fechar o modal Log In
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Métodos para abrir e fechar o modal Sign In
  const openModalSing = () => setIsModalOpenSing(true);
  const closeModalSing = () => setIsModalOpenSing(false);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* Logo/button da navBar */}
        <div className="navbar-brand">
          <a className="navbar-item fa-2x" href="/">
            <span style={{ color: "orange" }}>
              <i className="fas fa-vault"></i>
            </span>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              const burger = document.querySelector(".navbar-burger");
              const menu = document.querySelector(".navbar-menu");
              burger.classList.toggle("is-active");
              menu.classList.toggle("is-active");
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* Botões da navbar */}
            <a className="navbar-item" href="/">
              <span className="icon-text">
                <i className="fas fa-home"></i>
              </span>
            </a>

            <a className="navbar-item" href="/">
              <i className="fa-solid fa-mobile-button"></i>
            </a>

            <a className="navbar-item" href="/">
              <i className="fas fa-cog"></i>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="navbar-item" href="/about">
                  <i className="fa-solid fa-circle-exclamation"></i>
                </a>
                {/* Botão que abre o modal Sign In */}
                <button
                  className="button js-modal-trigger is-warning"
                  onClick={openModalSing}
                >
                  Sign In
                </button>
                {/* Botão que abre o modal Log In */}
                <button className="button js-modal-trigger" onClick={openModal}>
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Componentes dos modais */}
      <LogInCard isOpen={isModalOpen} closeModal={closeModal} />
      <SingInCard isOpen={isModalOpenSing} closeModal={closeModalSing} />
    </div>
  );
};

export default NavBarCard;
