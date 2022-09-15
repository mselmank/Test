import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export const All = (props) => {
  const { addToFavorite } = props;
  const pageNumberLimit = 100;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
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

  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: data,
  };
  return (
    <div>
      <form>
        <select
          className="rectangle-26"
          onChange={(event) => setSearch(event.target.value)}
        >
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="vuejs">Vuejs</option>
        </select>
      </form>
      <div>
        <Card res={data} addToFavorite={addToFavorite} />
      </div>
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
  );
};
