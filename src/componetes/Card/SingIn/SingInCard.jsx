import React from "react";

const SingInCard = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`} id="LogInModal">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Username" />
            <span className="icon is-small is-left">
              <i className="fas fa-id-card"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Phone"/>
            <span className="icon is-small is-left">
              <i className="fas fa-phone"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-warning">Sing In</button>
          </p>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
  );
};

export default SingInCard;
