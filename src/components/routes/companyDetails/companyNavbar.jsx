import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyNavbar = ({ name }) => {
  return (
    <div className="navbar bg-custom-primary p-2">
      <div className="container-fluid text-light d-inline-flex">
        <div>
          <Link to="/">
            <button className="btn">
              <FaArrowLeft className="text-white fs-1" />
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-center w-100">{name}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CompanyNavbar;
