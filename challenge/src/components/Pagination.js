import React from "react";

const Pagination = (props) => {
  // init
  const { currentPage, maxPageLimit, minPageLimit } = props;
  const totalPages = props.response.nbPages - 1;

  // build page numbers list based on total number of pages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    props.onPrevClick();
  };

  const handleNextClick = () => {
    props.onNextClick();
    console.log("page", pages);
  };

  const handlePageClick = (e) => {
    props.onPageChange(Number(e.target.id));
  };

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={currentPage === page ? "active" : null}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
  }

  return (
    <div className="main">
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" fill-opacity=".01" d="M0 0h16v16H0V0z" />
              <path
                d="m10.333 12-4-4 4-4"
                stroke="#000"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
        {pageDecremenEllipses}

        {pageNumbers}

        {pageIncrementEllipses}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" fill-opacity=".01" d="M0 0h16v16H0V0z" />
              <path
                d="m6.333 4 4 4-4 4"
                stroke="#000"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
