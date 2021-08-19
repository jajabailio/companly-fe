import React from "react";

const CompanyDetailsCard = ({ address, ownedBy }) => {
  return (
    <div className="container mt-4 mb-4">
      <div className="card p-3 border-0" style={{ backgroundColor: "#eaeaea" }}>
        <div className="mb-4">
          <h4 className="fs-5">Located</h4>
          <span className="ms-4 w-50">{address}</span>
        </div>
        <div>
          <h4 className="fs-5">Owned By</h4>
          <span className="ms-4 w-50">{ownedBy}</span>
        </div>
      </div>
      <div className="container mt-4">
        <p
          className="fs-5 fw-bold text-primary text-uppercase w-100 text-center"
          style={{ cursor: "pointer" }}
        >
          Edit
        </p>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
