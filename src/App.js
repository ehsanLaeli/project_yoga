import DivAval from "./components/DivAval";
import DivToo from "./components/DivToo";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import DidTree from "./components/DidTree";
import ButtonDivToo from "./components/ButtonDivToo";
import Cards from "./components/Cards";
import Divfour from "./components/Divfour";
import DivFive from "./components/DivFive";
import DivMostPopular from "./components/DivMostPopular";


import "./App.css";

const App = () => {
  return (
     <div className="App">
        <DivAval/>
        <Navbar/>
        <Button/>
        <DivToo/>
        <ButtonDivToo/>
        <DidTree/>
        <Cards/>
        <Divfour/>
        <DivMostPopular/>
        <DivFive/>

      </div>
  );
};

export default App;
