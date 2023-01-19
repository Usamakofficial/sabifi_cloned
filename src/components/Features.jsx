import React from "react";
import vid from "../assets/vid.mp4";
import sabifi from "../assets/sabifi.png";
const Features = () => {
  return (
    <>
      <div className="py-12 mt-10">
        <div className="flex flex-col text-center w-full">
          <h1 className="token-head text-5xl font-bold  tracking-normal">
            Why Sabifi
          </h1>
          <h2 className="text-5xl font-bold py-5 tracking-normal">
            Speed, Security, Scalability
          </h2>
          <h3 className="text-white">
            Fantom’s aBFT consensus protocol delivers unparalleled speed,
            security, and reliability.
          </h3>
          <h3 className="text-white py-3">
            {" "}
            Enjoy almost instant transactions and extremely low fees
          </h3>
          <video
            className="video-sec shadow-2xl my-10"
            src={vid}
            autoPlay
            loop
            muted
          />
        </div>
        <div className=" w-4/5 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  md:gap-4 lg:gap-7 py-2.5 ">
            <div className=" shadow-xl rounded-2xl py-2 ">
              <div className=" mx-2">
                <img className=" h-16" src={sabifi} alt="phantom" />

                <div className="py-2">
                  <h2 className="text-white text-xl">
                    Almost instant transfers
                  </h2>
                </div>
                <p>Transactions on Fantom are</p>
                <p>finalized in a second and cost a</p>
                <p>fraction of a cent.</p>
              </div>
            </div>
            <div className=" shadow-xl rounded-2xl py-2">
              <div className=" mx-2">
                <img className=" h-16" src={sabifi} alt="phantom" />

                <div className="py-2">
                  <h2 className="text-white text-xl">
                    Almost instant transfers
                  </h2>
                </div>
                <p>Transactions on Fantom are</p>
                <p>finalized in a second and cost a</p>
                <p>fraction of a cent.</p>
              </div>
            </div>
            <div className=" shadow-xl rounded-2xl py-2">
              <div className=" mx-2">
                <img className=" h-16" src={sabifi} alt="phantom" />

                <div className="py-2">
                  <h2 className="text-white text-xl">
                    Almost instant transfers
                  </h2>
                </div>
                <p>Transactions on Fantom are</p>
                <p>finalized in a second and cost a</p>
                <p>fraction of a cent.</p>
              </div>
            </div>
            <div className=" shadow-xl rounded-2xl py-2">
              <div className=" mx-2">
                <img className=" h-16" src={sabifi} alt="phantom" />

                <div className="py-2">
                  <h2 className="text-white text-xl">
                    Almost instant transfers
                  </h2>
                </div>
                <p>Transactions on Fantom are</p>
                <p>finalized in a second and cost a</p>
                <p>fraction of a cent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
