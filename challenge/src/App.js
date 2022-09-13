import "./index";

import Navbar from "./components/Navbar";

import { All } from "./screen/All";
import { MyFaves } from "./screen/MyFaves";
import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [all, setAll] = useState(true);

  const showAll = () => {
    setAll(true);
  };
  const showFavs = () => {
    setAll(false);
  };

  return (
    <div className="home-view">
      <div>
        <Navbar />
      </div>

      <div className="box-container-tab">
        <div
          className="rectangle rectangle-tab-active"
          onClick={() => showAll()}
        >
          All
        </div>
        <div
          className="rectangle rectangle-tab-active"
          onClick={() => showFavs()}
        >
          My faves
        </div>
      </div>
      <div>
        <>{all ? <All /> : <MyFaves />}</>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
