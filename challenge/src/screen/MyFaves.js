import React from "react";
import CardTwo from "../components/CardTwo";

export const MyFaves = (props) => {
  const { myFaves } = props;
  return (
    <div className="row">
      <div className="column">
        <pre>{JSON.stringify(myFaves, null, 2)}</pre>
      </div>
    </div>
  );
};
