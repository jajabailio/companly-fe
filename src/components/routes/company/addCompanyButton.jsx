import React from "react";
import CompanyEditorModal from "../companyDetails/companyEditorModal";

const AddCompanyButton = ({ modalShow, setModalShow, saveCompany }) => {
  return (
    <React.Fragment>
      <div className="container text-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => setModalShow(true)}
        >
          Add Company
        </button>
      </div>
      <CompanyEditorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        saveType={"new"}
        company={null}
        isActive={false}
        saveCompany={saveCompany}
      />
    </React.Fragment>
  );
};

export default AddCompanyButton;
