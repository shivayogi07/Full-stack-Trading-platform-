import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");

const handleSellClick = async () => {
  try {
    const response = await axios.post(
      "https://full-stack-trading-platform-z1yj-3ozxs9lt6.vercel.app",
      {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      },
      {
        withCredentials: true,
      }
    );

    alert(response.data.message || "Sell Order Placed Successfully!");

    closeSellWindow();

  } catch (err) {

    console.error(err);

    if (err.response?.status === 401) {
      alert("Session Expired. Please login again.");

      window.location.href = "http://localhost:3000/login";
      return;
    }

    alert(
      err.response?.data?.message ||
      "Failed to place sell order."
    );
  }
};

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="popup-overlay">
      <div className="buy-container">

        <div className="header">
          <div>
            <h3>{uid}</h3>
            <p>Regular Sell Order</p>
          </div>

          <button
            className="close-btn"
            onClick={handleCancelClick}
          >
            ✕
          </button>
        </div>

        <div className="regular-order">

          <div className="inputs">

            <fieldset>
              <legend>Quantity</legend>

              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Price (₹)</legend>

              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </fieldset>

          </div>

        </div>

        <div className="buttons">

          <span>
            Sell Value{" "}
            <strong>
              ₹
              {(
                Number(stockQuantity) *
                Number(stockPrice || 0)
              ).toFixed(2)}
            </strong>
          </span>

          <div>

            <button
              className="btn btn-blue"
              onClick={handleSellClick}
            >
              Sell
            </button>

            <button
              className="btn btn-grey"
              onClick={handleCancelClick}
            >
              Cancel
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SellActionWindow;