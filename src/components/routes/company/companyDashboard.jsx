import React from "react";

const CompanyDashboard = ({ active, inactive, companiesLength }) => {
  return (
    <div className="navbar bg-custom-primary">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-3">
            <div
              className="card w-100 h-100 text-light p-3 fs-3"
              style={{ backgroundColor: "#436988" }}
            >
              <div className="card-subtitle text-center fs-6">
                Number of Active
              </div>
              <div
                className="card-title text-center"
                style={{ fontSize: "2rem" }}
              >
                {active}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="card w-100 h-100 text-light p-3 fs-3"
              style={{ backgroundColor: "#436988" }}
            >
              <div className="card-subtitle text-center fs-6">
                Total Number of Companies
              </div>
              <div
                className="card-title text-center"
                style={{ fontSize: "3rem" }}
              >
                {companiesLength}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div
              className="card w-100 h-100 text-light p-3 fs-3"
              style={{ backgroundColor: "#436988" }}
            >
              <div className="card-subtitle text-center fs-6">
                Number of Inactive
              </div>
              <div
                className="card-title text-center"
                style={{ fontSize: "2rem" }}
              >
                {inactive}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
