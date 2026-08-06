import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Menu = () => {
  const { user } = useContext(AuthContext);

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="/logo.png"
        alt="Trading Platform Logo"
        style={{ width: "20px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <span
                className={
                  selectedMenu === 0 ? activeMenuClass : menuClass
                }
              >
                Dashboard
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <span
                className={
                  selectedMenu === 1 ? activeMenuClass : menuClass
                }
              >
                Orders
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <span
                className={
                  selectedMenu === 2 ? activeMenuClass : menuClass
                }
              >
                Holdings
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <span
                className={
                  selectedMenu === 3 ? activeMenuClass : menuClass
                }
              >
                Positions
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <span
                className={
                  selectedMenu === 4 ? activeMenuClass : menuClass
                }
              >
                Funds
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/app"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <span
                className={
                  selectedMenu === 5 ? activeMenuClass : menuClass
                }
              >
                Apps
              </span>
            </Link>
          </li>
        </ul>

        <hr />

        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">
            {user?.name
              ? user.name.substring(0, 2).toUpperCase()
              : "US"}
          </div>

          <p className="username">
            {user?.name || "USER"}
          </p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <p>{user?.email || "Not Logged In"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;