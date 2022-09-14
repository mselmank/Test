import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export const All = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
    );
    if (!response.ok) {
      throw new Error("data could not be fetched");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log("message", e.message);
      });
  }, [data]);
  /*  console.log("data", data); */

  return (
    <div>
      {/* {<pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <select className="rectangle-26">
        <option value="">Select your new</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vuejs">Vuejs</option>
      </select>
      <div>
        <Card res={data} />;
      </div>
    </div>
  );
};
