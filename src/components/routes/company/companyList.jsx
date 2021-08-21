import React from "react";
import CompanyCard from "./companyCard";

const CompanyList = ({ companies }) => {
  return (
    <div style={{ height: "75vh", overflow: "auto" }}>
      <div className="p-4">
        {companies.map((company) => (
          <CompanyCard key={company._id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
