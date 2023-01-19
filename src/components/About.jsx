import React from "react";
import ceo from "../assets/boss.png";
import usama from "../assets/usama.jpeg";
import ali from "../assets/ali.jpg";
import mubashar from "../assets/mubashar.jpg";
// import Particle from "./Particle";

const About = () => {
  return (
    <>
      <div className="container mx-auto">
      <div className="flex flex-col py-4 text-center w-full mb-8">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          Creator
        </h1>
        <hr className="hr-line mx-auto w-36 w h-2  rounded border-0 md:my-4 "></hr>
      </div>
        <div
          className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto"
        >
          <div className="md:w-3/6 w-full">
            <div>
              <h1 className="text-white leading-tight text-6xl font-bold">
                WAHHAB MIRZA <br />
                CEO, Founder <br />
                <span className="text-gradient">Of</span> SABIFI.
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
            <img src={ceo} alt="our ceo" className="token-img w-full" />
          </div>
        </div>
        <div className="flex flex-col py-4 text-center w-full mb-8">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          Our Team
        </h1>
        <hr className="hr-line mx-auto w-36 w h-2  rounded border-0 md:my-4 "></hr>
      </div>
        <div className="font-Poppins text-center text-black">
          <div
            className=" flex xl gap-20 flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-10"
          >
            <div className="bg-white/10 p-8 hover:shadow-lg rounded-3xl">
              <img className="rounded-full h-60 mx-auto" src={usama} alt="" />
              <h4 className="upperclass text-xl font-bold mt-6">Usama Anwar</h4>
              <p className="mt-4 text-gray-700">
                Mr. Usama Anwar is a well respected Blockchain developer and
                active investor in the DeFi. Mr. Usama will work closely with
                the Sabifi team on matters of governance, and scaling of the
                community..
              </p>
              <button className="btn mt-2 text-white font-bold py-2 px-4 rounded-full">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/usama-anwar-16803521b"
                >
                  Contact us
                </a>
              </button>
            </div>
            <div className="bg-white/10 hover:shadow-lg p-8 rounded-3xl">
              <img
                className="rounded-full h-60 mx-auto"
                src={mubashar}
                alt=""
              />
              <h4 className="upperclass text-xl font-bold mt-6">
                Mubashar Islam
              </h4>
              <p className="mt-4 text-gray-700">
                Mr. Mubashar Islam is a well respected Blockchain developer and
                crypto advisor. Mr. Mubashar received MS in Computer Science
                from the Punjab University College of Information Technology
              </p>
              <button className="btn mt-2 text-white font-bold py-2 px-4 rounded-full">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mubashar-islam-342483147/"
                >
                  Contact us
                </a>
              </button>
            </div>
            <div className="bg-white/10 hover:shadow-lg p-8 rounded-3xl">
              <img className="rounded-full h-60 mx-auto" src={ali} alt="" />
              <h4 className="upperclass text-xl font-bold mt-6">
                Muhammad Ali
              </h4>
              <p className="mt-4 text-gray-700">
                Mr. Muhammad Ali is a well respected web developer and active
                investor in the DeFi. Muhammad Ali will work closely with the
                Sabifi team on matters of governance, and scaling of the
                community..
              </p>
              <button className="btn mt-2  text-white font-bold py-2 px-4 rounded-full">
                <a
                  target="_blank"
                  href="https://twitter.com/Muhamma40533604?t=5LDtN5ExBSKJeTNXeGd8_g&s=09"
                >
                  Contact us
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Particle /> */}
    </>
  );
};

export default About;

{
  /* <div className='text-center py-10'>
            <h5 className=''>test</h5>
            <h1 className='text-4xl w-96 mx-auto leading-normal font-bold'>It is h2 tag mb-12</h1>
        </div> */
}
