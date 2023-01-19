import timelessLogo from "../assets/sabifi.png";

import { connectWallet } from "../Blockchain.Services";
import { useGlobalState, truncate } from "../store";
import { NavLink } from "react-router-dom";
import Whitepaper from "./Whitepaper";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [showIcons, setShowIcons] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    console.log("clicked away");
  };
  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <>
      <div className="container py-10">
        <nav className="navbar flex col-xl-4 col-lg-4 col-md-6 w-4/5 gap-10 items-center mx-auto navbar-expand-lg">
          <div className="md:flex-[0.5] flex-initial mt-3">
            <NavLink exact activeClassName="active_class" to="/">
              <img
                className="w-64 cursor-pointer"
                src={timelessLogo}
                alt="Timeless Logo"
              />
            </NavLink>
          </div>

          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="nav-bar collapse navbar-collapse justify-around"
            id="navbarSupportedContent"
          >
            <button
              class="btn shadow-xl text-white md:text-l p-2
 cursor-pointer font-bold"
            >
              <a href="https://swap.sabifi.io/" target="_blank">
                Sabswap
              </a>
            </button>
            <div className="nav text-lg gap-3 py-2 ">
              <NavLink
                exact
                activeClassName="active-link"
                to="/"
                className=" cursor-pointer font-bold
          "
              >
                Marketplace
              </NavLink>
              <NavLink
                exact
                activeClassName="active-link"
                to="/token"
                className=" cursor-pointer font-bold
          "
              >
                Our Token
              </NavLink>
              <NavLink
                exact
                activeClassName="active-link"
                to="/about"
                className=" cursor-pointer  font-bold
          "
              >
                About Us
              </NavLink>

              <div className=" cursor-pointer font-bold">
                <Whitepaper />
              </div>
            </div>
          </div>
          <div className="md:flex-[0.5] flex justify-center">
            {connectedAccount ? (
              <button
                className="btn shadow-xl text-white
                px-2
                py-2
   cursor-pointer"
              >
                {truncate(connectedAccount, 4, 4, 11)}
              </button>
            ) : (
              <button
                className="btn shadow-xl text-white
               px-2
               py-2
          rounded-full cursor-pointer"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
