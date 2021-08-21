import React from "react";
import CompanyEditorModal from "./companyEditorModal";

const CompanyEditor = ({
  company,
  isActive,
  modalShow,
  setModalShow,
  deleteCompany,
  restoreCompany,
  updateCompany,
}) => {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <p
          className="fs-5 fw-bold text-primary text-uppercase w-100 text-center"
          style={{ cursor: "pointer" }}
          onClick={() => setModalShow(true)}
        >
          Edit
        </p>
      </div>

      {company.name !== "" && (
        <CompanyEditorModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          saveType={"edit"}
          company={company}
          isActive={isActive}
          deleteCompany={() => deleteCompany()}
          restoreCompany={() => restoreCompany()}
          updateCompany={updateCompany}
        />
      )}
    </React.Fragment>
  );
};

export default CompanyEditor;
