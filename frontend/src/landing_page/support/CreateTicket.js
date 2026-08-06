import React from "react";

function CreateTicket() {
  const links = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  const sections = Array(6).fill("Account Opening");

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((title, index) => (
          <div className="col-4 p-5 mt-2 mb-2" key={index}>
            <h4>
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
              ></i>{" "}
              {title}
            </h4>

            {links.map((item, i) => (
              <div key={i}>
                <a
                  href="/support"
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                  }}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;