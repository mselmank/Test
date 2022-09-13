import React from "react";

export default function Hero(props) {
  const { changeTab, myFaves } = props;

  return (
    <div className="box-container-tab">
      <div className="rectangle" onClick={changeTab(true)}>
        <h5 className="title">All</h5>
      </div>
      <div className="rectangle" onClick={myFaves(false)}>
        <h5 className="title">My faves</h5>
      </div>
    </div>
  );
}
