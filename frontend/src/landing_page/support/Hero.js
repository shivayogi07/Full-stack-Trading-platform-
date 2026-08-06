import React from "react";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="container-fluid py-5"
      id="supportHero"
      style={{ background: "#387ed1", color: "#fff" }}
    >
      <div className="container">
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <h2 className="fw-bold mb-3 mb-md-0">Support Portal</h2>

          <a href="#" className="text-white text-decoration-none fw-semibold">
            Track Tickets →
          </a>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Side */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            {/* Search Box */}
            <div className="input-group input-group-lg shadow mb-4">
              <span className="input-group-text bg-white border-0">
                <FaSearch className="text-secondary" />
              </span>

              <input
                type="text"
                className="form-control border-0"
                placeholder="Eg. How do I activate F&O?"
              />
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-white text-decoration-none">
                Track account opening
              </a>

              <a href="#" className="text-white text-decoration-none">
                Track segment activation
              </a>

              <a href="#" className="text-white text-decoration-none">
                Intraday margins
              </a>

              <a href="#" className="text-white text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5">
            <div
              className="card border-0 shadow-lg"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4 text-dark">Featured Articles</h3>

                <ol className="ps-3">
                  <li className="mb-3">
                    <a
                      href="#"
                      className="text-decoration-none text-primary fw-semibold"
                    >
                      Current Takeovers and Delisting - January 2024
                    </a>
                  </li>

                  <li className="mb-3">
                    <a
                      href="#"
                      className="text-decoration-none text-primary fw-semibold"
                    >
                      Latest Intraday Leverages - MIS & CO
                    </a>
                  </li>

                  <li className="mb-3">
                    <a
                      href="#"
                      className="text-decoration-none text-primary fw-semibold"
                    >
                      How to activate F&O trading
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-decoration-none text-primary fw-semibold"
                    >
                      Fund withdrawal process
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
