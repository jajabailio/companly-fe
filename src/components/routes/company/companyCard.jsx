import React from "react";
import { Link } from "react-router-dom";

const handleCardStyle = (c) => {
  if (c.isActive) {
    return { backgroundColor: "#c9d6e0", boxShadow: "1px 1px 4px #9E9E9E" };
  } else {
    return { backgroundColor: "#ededed", color: "gray" };
  }
};

const CompanyCard = ({ company }) => {
  return (
    <div className="card mb-3 border-0" style={handleCardStyle(company)}>
      <div className="card-body d-inline-flex">
        <div className="row w-100 p-0">
          <div className="col-6 mx-0 pe-0">
            <div className="card-title">
              <h3>{company.name} </h3>
              <Link
                className="m-0 text-secondary"
                to={"/company/" + company._id}
              >
                View details
              </Link>
            </div>
          </div>
          <div className="col-3 text-center mx-0 px-0">
            <div className="card-title">
              <h3>6</h3>
              <p className="m-0">Users</p>
            </div>
          </div>
          <div className="col-3 text-end mx-0 px-0">
            <div className="card-title h-100">
              <h3 className="align-middle" style={{ cursor: "pointer" }}>
                {company.isActive ? "Active" : "Inactive"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
