import React from "react";
import Typed from "react-typed";
import './BigText.css'
const BigText = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Sabifi Marketplace</h1>{" "}
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "Mint, buy and sell your NFTs",
            "Exchange your crypto at swap.sabifi.io",
            "We are live at Ethereum & Polygon...",
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
      </div>
      
    </div>
  )
}

export default BigText