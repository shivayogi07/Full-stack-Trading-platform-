import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="mb-5 img-fluid"
        />

        <h1 className="mt-4">Invest in Everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>

        <button
          type="button"
          className="btn btn-primary fs-5 p-2 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;