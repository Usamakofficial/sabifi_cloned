import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from "../store";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { create } from "ipfs-http-client";
import { mintNFT } from "../Blockchain.Services";
import favicon from "../assets/favicon.png";
import sabifi from "../assets/sabifi.png";

const auth =
  "Basic " +
  Buffer.from(
    "2IGcao3DIt2K5C7qHgm1vWaIU5C" + ":" + "157b5d7cd67aeb879249aa79a5b1a543"
  ).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const CreateNFT = () => {
  const [modal] = useGlobalState("modal");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description) return;

    setGlobalState("modal", "scale-0");
    setGlobalState("loading", { show: true, msg: "Uploading IPFS data..." });

    try {
      const created = await client.add(fileUrl);
      const metadataURI = `https://ipfs.io/ipfs/${created.path}`;
      const nft = { title, price, description, metadataURI };

      setLoadingMsg("Intializing transaction...");
      setFileUrl(metadataURI);
      await mintNFT(nft);

      resetForm();
      setAlert("Minting completed...", "green");
      window.location.reload();
    } catch (error) {
      console.log("Error uploading file: ", error);
      setAlert("Minting failed...", "red");
    }
  };

  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileUrl(e.target.files[0]);
    };
  };

  const closeModal = () => {
    setGlobalState("modal", "scale-0");
    resetForm();
  };

  const resetForm = () => {
    setFileUrl("");
    setImgBase64(null);
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}
    >
      <div className="create-nft shadow-xl shadow-yellow-700 rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-white">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-white" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-24 ">
              <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src={sabifi}
              />
            </div>
          </div>

          <div
            className="flex flex-row justify-between rounded-full
              border-transparent drop-shadow-xl  items-center bg-white mt-5"
          >
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                rounded-full
              border-transparent drop-shadow-xl
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gradient-to-r from-green-400 to-blue-500 file:text-white
                  cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div
            className="flex flex-row justify-between
                hover:bg-transparent items-center rounded-full bg-white mt-5"
          >
            <input
              className="block w-full text-sm rounded-full
              border-transparent drop-shadow-xl 
                text-gray-400 bg-white border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-white rounded-full mt-5">
            <input
              className="block w-full text-sm rounded-full
              border-transparent drop-shadow-xl 
                text-slate-500 border-0
                focus:outline-none focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="price"
              placeholder="Price (Eth)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-white rounded-full mt-5">
            <textarea
              className="block w-full text-sm resize-none
              rounded-full
              border-transparent drop-shadow-xl 
                text-slate-500 bg-white border-0
                focus:outline-none focus:ring-0 h-10"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn flex flex-row justify-center items-center
              w-full py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparen
              font-bold text-base
              focus:outline-none focus:ring mt-5"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
