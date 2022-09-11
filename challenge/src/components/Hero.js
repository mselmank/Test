import React from "react";

export default function Hero(props) {
  const { changeTab, myFaves } = props;

  return (
    <div className="box-container-tab">
      <div className="rectangle" onClick={changeTab(true)}>
        All
      </div>
      <div className="rectangle" onClick={myFaves(false)}>
        My faves
      </div>
    </div>
  );
}
