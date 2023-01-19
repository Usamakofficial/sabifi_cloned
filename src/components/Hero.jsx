import Identicon from "react-identicons";
import { setGlobalState, useGlobalState, truncate } from "../store";
import hero from "../assets/hero.png";

const Hero = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const onCreatedNFT = () => {
    setGlobalState("modal", "scale-100");
  };

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-14"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white leading-tight text-6xl font-bold">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-gradient">NFTs</span> Collections
          </h1>
          <p className="text-gradient font-semibold text-lg mt-3">
            Mint and collect the hottest NFTs around.
          </p>
        </div>

        <div className="flex flex-row mt-4">
          <button
            className="btn shadow-xl text-lg text-white cursor-pointer font-bold"
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div>

        {/* <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-black font-bold">1231k</p>
            <small className="text-gray-400">User</small>
          </div>
          <div>
            <p className="text-black font-bold">152k</p>
            <small className="text-gray-400">Artwork</small>
          </div>
          <div>
            <p className="text-black font-bold">200k</p>
            <small className="text-gray-400">Artist</small>
          </div>
        </div> */}
      </div>

      <div
        className="image-box shadow-2xl shadow-current
      mt-10 md:mt-0  transform transition-all hover:translate-y-2 duration-300 hover:scale-[1.1]"
      >
        <div>
          <img src={hero} alt="NFT Art" className="hero-png mb-16" />
        </div>
        <div className="lower-box flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : "Connect Your Wallet"}
            size={50}
            className="h-10 w-10 object-contain rounded-full mx-2"
          />
          <div className=" px-8">
            <p className="text-white font-bold text-lg">
              {connectedAccount
                ? truncate(connectedAccount, 5, 4, 11)
                : "Connect Your Wallet"}
            </p>
            <small className=" text-gradient text-base font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
