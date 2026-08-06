import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Options trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Mutual fund platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Bonds investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-2">
            Insurance platform
          </p>
        </div>

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

export default Universe;