import axios from "axios";
import { ethers } from "ethers";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { useState } from "react";
import * as Scroll from "react-scroll";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function Api() {
  // const [account, setAccount] = useState("");
  const [data, setData] = useState([]);
  console.log(data);

  const connect = () => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // let res = await provider.send("eth_requestAccounts", []);
    // setAccount(res[0]);
    getData([0]);
  };
  const getData = () => {
    const options = {
      method: "GET",
      url: "https://api.opensea.io/api/v1/assets",
      params: {
        owner: "0x2E8d3856E5A4627E22D2cdAF6C8085eDe9037241",
        order_direction: "desc",
        limit: "8",
        include_orders: "false",
      },
      headers: { accept: "application/json" },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data.assets);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div className="flex justify-center py-24">
        <Link to="anchor" spy={true} smooth={true} duration={700}>
          <button
            onClick={connect}
            className="btn text-white font-bold py-2 text-xl tracking-widest px-5 "
          >
            Our NFTs
          </button>
        </Link>
      </div>
      <div className="container w-4/5 mx-auto">
        <h4 className=" text-white text-3xl font-bold uppercase text-gradient">
          {data.length > 0
            ? "Our Featured NFTs on OpenSea"
            : "Click to see Featured NFTs of Sabifi"}
        </h4>
      </div>

      <div id="anchor" className="nft-image w-4/5 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  md:gap-4 lg:gap-7 py-2.5 cursor-pointer">
          {data.map((nft) => {
            return (
              <>
                <div className="nft-upsec shadow-xl rounded-2xl ">
                  <div
                    className="w-full my-2 p-3 transform 
                  transition-all hover:translate-y-2 duration-300 hover:scale-[1.1]"
                  >
                    <img
                      src={nft.image_thumbnail_url}
                      className="image-br h-86  w-full object-cover rounded-lg "
                    />
                  </div>
                  <div className="nft-sec shadow-xl">
                    <div className="py-2 px-2">
                      <button
                        className="btn shadow-lg text-white text-sm
                   cursor-pointer rounded-full"
                      >
                        <a href={nft.permalink} target="_blank">
                          View on Opensea
                        </a>
                      </button>
                    </div>
                    <div className="px-2 head- text-white">
                      <h2 className=" font-bold overflow-hidden ">
                        {nft.name}
                      </h2>
                    </div>

                    <div className="py-2 px-2">
                      <p className=" h-16 overflow-hidden text-sm">
                        <span className="text-gradient">
                          {" "}
                          {nft.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Api;
