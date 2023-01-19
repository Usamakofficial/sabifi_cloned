import { useEffect } from "react";
import { getAllNFTs, isWallectConnected } from "./Blockchain.Services";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Token from "./components/Token";
import Error from "./components/Error";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    await getAllNFTs();
  }, []);

  return (
    <>
      <div className="bg-color">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/token" component={Token} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
