import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { ReactComponent as AngularIcon } from "../icons/angular.svg";
import { MyFaves } from "./MyFaves";

export const All = (props) => {
  const { all } = props;
  const pageNumberLimit = 5;
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?&query=${search}&page=${currentPage}`
    );
    if (!response.ok) {
      throw new Error("data could not be fetched");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log("message", e.message);
      });
  }, [search, currentPage]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };
  const handleFavorites = () => {
    setFav();
  };
  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: data,
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {all ? (
        <div>
          <form>
            {/* The challenge included adding an icon inside each option, but the instructions say don't use 3rd party library for the UI components. The <option> tag doesn't support SVG just plain text
        Anyways here is *** <AngularIcon/> ****.
        Link: https://stackoverflow.com/questions/46596240/svg-inside-option-element/46596722#46596722
        
        */}
            <select
              className="rectangle-26"
              onChange={(event) => setSearch(event.target.value)}
            >
              <option value="angular">Angular</option>
              <option value="react">React</option>
              <option value="vuejs">Vuejs</option>
            </select>
          </form>
          <Card res={data} handleFavorites={setFav} />
          <div>
            {!loading ? (
              <Pagination
                {...paginationAttributes}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                onPageChange={onPageChange}
              />
            ) : (
              <div> Loading... </div>
            )}
          </div>
        </div>
      ) : (
        <div className="myFav">
          <MyFaves fav={fav} />
          <div>
            {!loading ? (
              <Pagination
                {...paginationAttributes}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                onPageChange={onPageChange}
              />
            ) : (
              <div> Loading... </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
