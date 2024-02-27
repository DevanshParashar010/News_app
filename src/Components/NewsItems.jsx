import React from "react";

export default function NewsItems({
  title,
  description,
  imgurl,
  newsurl,
  author,
  date,
  source,
}) {
  return (
    <>
      {" "}
      <div className="col ">
        <div className="card shadow-sm">
          <span
            className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark text-white"
            style={{ zIndex: 1 }}
          >
            {source}
          </span>
          <img
            src={imgurl}
            alt="..."
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-danger"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
