import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

import { MdDevicesOther, MdDashboard, MdGroups } from "react-icons/md";
import { FaPlay, FaPowerOff } from "react-icons/fa";
import { Context } from "../../context/context";

const Navbar = () => {
  const [title, setTitle] = useState("My Ads");
  const path = useLocation();
  const navigate = useNavigate();
  const { logout, userInfo } = useContext(Context);

  const logoutHandler = () => {
    logout();
    if (userInfo === null) {
      navigate("/login");
    }
  };

  useEffect(() => {
    switch (path.pathname) {
      case "/":
        setTitle("Dashboard");
        break;
      case "/groups":
        setTitle("Groups");
        break;
      case "/devices":
        setTitle("Devices");
        break;
      case "/ads":
        setTitle("Ads");
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <div className="sticky top-0 z-10 flex justify-between navbar bg-bgNavbar">
      <div className="left">
        <div className="flex logo">
          <img src="images/logo.png" alt="logo" className="bg-bgNavbar" />
        </div>
        <div className="vertical-bar"></div>
        <p className="ml-4 text-2xl text-textHead">{title}</p>
      </div>
      <div className="flex gap-6 right profile-section">
        <div className="w-10 h-10 profile-pic ">
          <img src="images/profile.png" alt="profile-pic" />
        </div>
        <div className="pr-5 text-center profile-content text-textHead">
          <h1 className="text-xl leading-none">Himalaya</h1>
          <p className="text-xs text-[#6DB3E8] leading-none">Customer ID</p>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Logout">
          <button className=" btn logout-button" onClick={logoutHandler}>
            <FaPowerOff />
          </button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed top-20 bg-white shadow-[0_4px_11px_rgba(0,0,0,0.1)] w-32 min-h-full flex justify-center">
      <div className="flex flex-col w-full gap-24 pt-32 nav-links">
        {[
          /*Links with respective icons in there order*/
          { icon: <MdDashboard className="text-[34px]" />, text: "Dashboard" },
          {
            icon: <MdGroups className="text-[34px]" />,
            text: "Groups",
          },
          {
            icon: <MdDevicesOther className="text-[34px]" />,
            text: "Devices",
          },
          {
            icon: <FaPlay className="text-[34px]" />,
            text: "Ads",
          },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={
              index === 0
                ? "/"
                : `/${item.text.toLowerCase().replace(/ /g, "-")}`
            }
            className="flex flex-col items-center navlink"
          >
            {item.icon}
            <p className="mt-1">{item.text}</p>
          </NavLink>
        ))}
        <div className="marker"></div>
      </div>
    </div>
  );
};

export { Navbar, Sidebar };
