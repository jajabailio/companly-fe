import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CompanyNavbar = ({ name, isActive, restoreCompany }) => {
  return (
    <React.Fragment>
      <div className="navbar bg-custom-primary p-2">
        <div className="container-fluid text-light d-inline-flex">
          <div>
            <NavLink to="/">
              <button className="btn">
                <FaArrowLeft className="text-white fs-1" />
              </button>
            </NavLink>
          </div>
          <div>
            <h1 className="text-center w-100">{name}</h1>
          </div>
          <div></div>
        </div>
      </div>
      {!isActive && (
        <div className="navbar bg-danger text-white">
          <span className="text-center w-100">
            Company deleted. If you want to restore this company,
            <button
              className="btn btn-danger btn-sm"
              style={{ marginTop: "-2px" }}
              onClick={() => restoreCompany()}
            >
              click here
            </button>
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default CompanyNavbar;
