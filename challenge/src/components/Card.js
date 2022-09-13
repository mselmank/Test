import React from "react";
import moment from "moment";

function Card(props) {
  const { items } = props;
  const formatDate = () => {
    let format = moment().format();

    return format;
  };
  const relativeTime = () => {
    let newDate = moment().startOf().fromNow();
    return newDate;
  };

  return (
    <>
      <div className="cards">
        <div class="one">
          <div className="card">
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
                <span></span>
              </div>
            </div>
            <div className="text-cards">
              <span></span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          {" "}
          <div className="card">
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
                <span></span>
              </div>
            </div>
            <div className="text-cards">
              <span></span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="three">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="four">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="five">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="six">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="seven">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="eight">
          {" "}
          <div className="card">
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
                <span>{/* {relativeTime(item.created_at)} */}</span>
              </div>
            </div>
            <div className="text-cards">
              <span>{/* {item.story_title} */}</span>
            </div>

            <div className="icon-rectangule">
              <div className="icon-favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    fill="#DD0031"
                    d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*    })} */}
    </>
  );
}

export default Card;