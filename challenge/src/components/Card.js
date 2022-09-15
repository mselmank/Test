import React, { useState } from "react";
import moment from "moment";

function Card(props) {
  const { res } = props;
  const [favorite, setFavorite] = useState([]);
  const [fillHeart, setFillHeart] = useState(false);

  const formatDate = () => {
    let format = moment().format();

    return format;
  };
  const relativeTime = () => {
    let newDate = moment().startOf().fromNow();
    return formatDate(newDate);
  };

  const addToFavorite = (id) => {
    const data = res.hits.find((item) => item.id === id);
    setFavorite([...favorite, data]);
    console.log("favoritos", favorite);
  };

  const removeFavorite = (id) => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };
  let findfavorite = res?.hits?.filter((item) => favorite.includes(item.id));

  /*   let filtered = res?.hits?.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  }); */

  const getColumsForRow = () => {
    let items = res?.hits?.map((element, index) => {
      return (
        <div key={element.id} className="card">
          <div className="icon-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#606060"
                d="M8 1.333c3.676 0 6.667 2.991 6.667 6.667 0 3.676-2.991 6.667-6.667 6.667-3.676 0-6.667-2.991-6.667-6.667 0-3.676 2.991-6.667 6.667-6.667zM8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.667 8V4H7.333v5.333H12V8H8.667z"
              />
            </svg>
            <div className="hours-ago">
              <span>{relativeTime(element.created_at)}</span>
            </div>
          </div>
          <div className="text-cards">
            <span>{element.story_title}</span>
          </div>
          <div className="icon-rectangule">
            <div className="icon-favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                onClick={() => addToFavorite(element.id)}
              >
                <path
                  fill="#DD0031"
                  d="M12 8.229C12.234 7.109 13.547 2 17.382 2 19.602 2 22 3.551 22 7.003c0 3.907-3.627 8.47-10 12.629C5.627 15.473 2 10.91 2 7.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 7.003C0 11.071 3.06 16.484 12 22c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-1.996 0-1.004 0 7.003z"
                />
              </svg>
            </div>
          </div>
        </div>
      );
    });
    return items;
  };

  return <div className="myDIV">{getColumsForRow()}</div>;
}

export default Card;
