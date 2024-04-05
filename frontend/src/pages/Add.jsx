import React, { useState } from "react";
import axios from "axios";
import "../styles/add.css";

function Add() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
  });

  const handleChangeForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3310/api/car", formData)
      .then((response) => {
        console.info(response.data);
        setFormData({
          make: "",
          model: "",
          year: "",
          price: "",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="AddCardBackgroud">
      <div className="formularCss">
        <form className="AddCardFormCss" onSubmit={submitForm}>
          <h5>Ajouter annonce</h5>
          <label htmlFor="make">Marque :</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChangeForm}
            id="make"
          />
          <label htmlFor="model">Modèle :</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChangeForm}
            id="model"
          />
          <label htmlFor="year">Année :</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChangeForm}
            id="year"
          />
          <label htmlFor="price">Prix :</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChangeForm}
            id="price"
          />
          <input className="btnEnvoyer" type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}

export default Add;
