import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(
        "https://full-stack-trading-platform-uquj.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        {
          withCredentials: true,
        }
      );

      alert(response.data.message || "Order Placed Successfully!");

      closeBuyWindow();

    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        alert("Session Expired. Please login again.");

        window.location.href =
          "https://full-stack-trading-platform-npnm4m86h-shivayogi-ds-projects.vercel.app/login";

        return;
      }

      alert(
        err.response?.data?.message ||
          "Failed to place order."
      );
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="popup-overlay">
      <div className="buy-container">

        <div className="header">
          <div>
            <h3>{uid}</h3>
            <p>Regular Buy Order</p>
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
            Margin Required{" "}
            <strong>
              ₹
              {(Number(stockQuantity) * Number(stockPrice || 0)).toFixed(2)}
            </strong>
          </span>

          <div>

            <button
              className="btn btn-blue"
              onClick={handleBuyClick}
            >
              Buy
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

export default BuyActionWindow;