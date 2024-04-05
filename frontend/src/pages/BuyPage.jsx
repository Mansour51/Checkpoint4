import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./Add";
import ConnectionModal from "../components/ConnectionModal";

import "../styles/buyPage.css";

// eslint-disable-next-line react/prop-types
function BuyPage({ refreshPage }) {
  const [ads, setAds] = useState([]);
  const [updateAds, setUpdateAds] = useState({
    id: "",
    make: "",
    model: "",
    price: "",
  });

  const getMySetup = () => {
    axios
      .get("http://localhost:3310/api/car")
      .then((response) => setAds(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3310/api/car/${id}`)
      .then(() => refreshPage())
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  const handleUpdate = (id) => {
    const updatedAd = ads.find((ad) => ad.id === id);
    setUpdateAds(updatedAd);
  };

  const submitUpdate = () => {
    axios
      .put(`http://localhost:3310/api/car/${updateAds.id}`, updateAds)
      .then(() => {
        getMySetup();
        setUpdateAds({
          id: "",
          make: "",
          model: "",
          year: "",
          price: "",
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMySetup();
  }, []);

  return (
    <div>
      <ConnectionModal />
      {ads.map((ad) => (
        <div key={ad.id} className="card">
          <h1>{ad.make}</h1>
          <h3>{ad.model}</h3>
          <h6>{ad.year}</h6>

          <div className="image">
            <img src={ad.image_url} alt="" />
          </div>
          <h4>{ad.price}</h4>
          <div className="button">
            <button
              type="button"
              className="update-button"
              onClick={() => handleUpdate(ad.id)}
            >
              Modifier
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDelete(ad.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <div className="UpdateForm">
        <h2>Modifier l'annonce</h2>
        <label htmlFor="make">Marque:</label>{" "}
        <input
          type="text"
          name="make"
          value={updateAds.make}
          onChange={(e) => setUpdateAds({ ...updateAds, make: e.target.value })}
        />
        <label htmlFor="model">Modèle :</label>
        <input
          type="text"
          name="model"
          value={updateAds.model}
          onChange={(e) =>
            setUpdateAds({ ...updateAds, model: e.target.value })
          }
        />
        <label htmlFor="year">Année :</label>
        <input
          type="text"
          name="year"
          value={updateAds.year}
          onChange={(e) => setUpdateAds({ ...updateAds, year: e.target.value })}
        />
        <label htmlFor="price">Prix :</label>
        <input
          type="text"
          name="price"
          value={updateAds.price}
          onChange={(e) =>
            setUpdateAds({ ...updateAds, price: e.target.value })
          }
        />
        <button type="button" onClick={submitUpdate}>
          Valider
        </button>
      </div>
      <Add />
    </div>
  );
}

export default BuyPage;
