import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState("General");
  return (
    <div>
      <header className="d-flex justify-content-center py-3 bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item" onClick={() => setMenu("General")}>
            <Link
              to="/"
              className={`nav-link ${
                menu === "General" ? "active" : ""
              } text-white`}
              aria-current="page"
            >
              General
            </Link>
          </li>
          <li className="nav-item" onClick={() => setMenu("Science")}>
            <Link
              to="/Science"
              className={`nav-link ${
                menu === "Science" ? "active" : ""
              } text-white`}
            >
              Science
            </Link>
          </li>
          <li className="nav-item" onClick={() => setMenu("Health")}>
            <Link
              to="/Health"
              className={`nav-link ${
                menu === "Health" ? "active" : ""
              } text-white`}
            >
              Health
            </Link>
          </li>
          <li className="nav-item" onClick={() => setMenu("Business")}>
            <Link
              to="/Business"
              className={`nav-link ${
                menu === "Business" ? "active" : ""
              } text-white`}
            >
              Business
            </Link>
          </li>
          <li className="nav-item" onClick={() => setMenu("Technology")}>
            <Link
              to="/Technology"
              className={`nav-link ${
                menu === "Technology" ? "active" : ""
              } text-white`}
            >
              Technology
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
