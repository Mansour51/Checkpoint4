import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/connectionModal.css";

function ConnectionModal() {
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const client = axios.create({
    baseURL,
    timeout: 60_000,
  });

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginUser } = useContext(LoginUserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    client
      .post(
        "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setLoginUser({
          id: response.data.id,
          role: response.data.role,
          email: response.data.email,
        });
        navigate("/usershomepage");
      })
      .catch((error) => console.error(error));
  };
  const handleCreateAccount = () => {};
  const handleForgotPassword = () => {};

  return (
    <>
      <section className="connection_button_container">
        <button
          type="button"
          className="connection_button"
          onClick={toggleModalOnce}
        >
          Se connecter
        </button>
      </section>
      {modal && (
        <div className="overlay">
          <dialog className="connection_modal">
            <form className="connection_modal_content" onSubmit={submitForm}>
              <h2>SE CONNECTER</h2>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@gmail.com"
                pattern="[chiffres/lettres/tiret]@[lettres].[lettres]"
                onChange={handleChangeEmail}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Saisissez votre mot de passe"
                minLength="8"
                onChange={handleChangePassword}
              />
              <input type="submit" className="login" value="Login" />
              <div className="extra_links">
                <button
                  className="createButton"
                  type="button"
                  onClick={handleCreateAccount}
                >
                  Créer un compte
                </button>
                <button
                  className="forgotButton"
                  type="button"
                  onClick={handleForgotPassword}
                >
                  Mot de passe oublié ?
                </button>
              </div>
            </form>
            <button type="button" onClick={toggleModal}>
              &times;
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}

export default ConnectionModal;
