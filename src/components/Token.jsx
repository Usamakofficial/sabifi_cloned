import React from "react";
import token_img from "../assets/token_img.png";
import logicon from "../assets/logicon.png";
import policon from "../assets/policon.png";
import cmcicon from "../assets/cmcicon.png";
import Artboard from "../assets/artboard.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Accordion from "../components/Accordion";
import HiddenContent from "../components/Accordion";
import Features from "./Features";
// import Particle from "./Particle";
const Token = () => {
  return (
    <>
      <div className="flex flex-col py-4 text-center w-full mb-8">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          SABIFI TOKEN
        </h1>
        <hr className="hr-line mx-auto w-64 w h-2  rounded border-0 md:my-4 "></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto"
      >
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-white leading-tight text-6xl font-bold">
              The Next Gen <br />
              Smart Digital, <br />
              <span className="text-gradient">Payment</span> Method
            </h1>
            <p className="text-gradient font-semibold text-lg mt-3">
              Our team of finance & Technology experts have joined
            </p>
            <p className="text-gradient font-semibold text-lg">
              to turn your simple wallets into crypto wallets through SABIFI.
            </p>
          </div>
        </div>
        <div
          className="
    mt-10 md:mt-0"
        >
          <img src={token_img} alt="NFT Art" className="token-img w-full" />
        </div>
      </div>
      <Features/>
      <div className="flex flex-col py-16 text-center w-full">
        <h1 className="token-head text-6xl font-bold  tracking-normal">
          Find Us
        </h1>
        <hr className="hr-line mx-auto w-36 shadow-xl h-2  rounded border-0 md:my-4 "></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-5"
      >
        <div
          className=" md:w-2/5 w-full 
    mt-10 md:mt-0"
        >
          <img src={Artboard} alt="NFT Art" className=" h-auto w-full" />
        </div>
        <div className=" md:w-2/5 w-full mt-10 md:mt-0">
          <div class="grid lg:flex-row justify-items-end mb-4 w-full">
            <button className="btn inline-flex py-7 p-12 rounded-xl mb-14 items-center md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img
                className="object-cover caret-white w-8 -ml-5 mr-2"
                src={logicon}
                alt=""
              />
              <span className="ml-4 flex  items-start flex-col leading-none">
                <span className="text-2xl font-semibold text-white">
                  <a
                    href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915"
                    target="_blank"
                  >
                    SABIFI on Etherscan
                  </a>
                </span>
              </span>
              <a
                href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915"
                target="_blank"
              >
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </a>
            </button>
          </div>
          <div className="grid lg:flex-row justify-items-end mb-4">
            <button className="btn inline-flex py-8 p-7 mb-12 rounded-lg items-center md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img className="object-cover w-8" src={policon} alt="" />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-2xl font-semibold text-white">
                  <a
                    href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915"
                    target="_blank"
                  >
                    SABIFI on Polygonscan
                  </a>
                </span>
              </span>
              <a
                href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915"
                target="_blank"
              >
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </a>
            </button>
          </div>
          <div className="grid lg:flex-row justify-items-end mb-4">
            <button className="btn inline-flex py-8 px-3 rounded-lg items-start lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img
                className="object-cover w-8 items-start"
                src={cmcicon}
                alt="artboard"
              />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-2xl font-semibold text-white ">
                  SABIFI on Coinmarketcap
                </span>
                <span className="text-xs font-medium text-white">
                  coming soon
                </span>
              </span>
              <span>
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-5"
      ></div>
      {/* <Particle /> */}
      <div
        className=" md:flex-row w-4/5
    items-center mx-auto"
      >
        <HiddenContent />
      </div>
    </>
  );
};

export default Token;
