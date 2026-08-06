import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

useEffect(() => {
  const fetchPositions = async () => {
    try {
      const res = await axios.get(
        "https://full-stack-trading-platform-z1yj-3ozxs9lt6.vercel.app",
        {
          withCredentials: true,
        }
      );

      // Backend returns:
      // { success: true, positions: [...] }

      setAllPositions(res.data.positions);

    } catch (err) {

      console.error(err);

      if (err.response?.status === 401) {

        alert("Session expired. Please login again.");

        window.location.href = "http://localhost:3000/login";

        return;
      }

      alert(
        err.response?.data?.message ||
        "Failed to load positions."
      );
    }
  };

  fetchPositions();
}, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;

              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;