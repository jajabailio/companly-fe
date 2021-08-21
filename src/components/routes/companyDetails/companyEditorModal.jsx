import React from "react";
import { Modal } from "react-bootstrap";
import Joi from "joi-browser";
import Form from "../../common/form";

class CompanyEditorModal extends Form {
  state = {
    data: { name: "", address: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Company Name"),
    address: Joi.string().required().label("Address"),
  };

  componentDidMount() {
    if (this.props.saveType !== "edit") return;

    const { name, address } = this.props.company;
    const company = { name, address };

    const errors = { ...this.state.errors };
    this.setState({ data: company, errors });
  }

  render() {
    const {
      show,
      onHide,
      saveType,
      isActive,
      deleteCompany,
      restoreCompany,
      updateCompany,
      saveCompany,
    } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Body>
          <h2 className="text-center mb-5 text-primary">
            Save Company Details
          </h2>
          <form className="mt-3" onSubmit={this.handleSubmit}>
            <div className="form-group mb-4">
              {this.renderInput("name", "Company Name")}
            </div>
            <div className="form-group mb-5">
              {this.renderInput("address", "Address")}
            </div>
            <div className="d-flex justify-content-around">
              {saveType === "edit" ? (
                isActive ? (
                  <button
                    type="button"
                    onClick={() => deleteCompany()}
                    className="btn text-danger fw-bold text-uppercase"
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => restoreCompany()}
                    className="btn text-success fw-bold text-uppercase"
                  >
                    Restore
                  </button>
                )
              ) : (
                <></>
              )}

              <button
                type="button"
                onClick={() => {
                  saveType !== "edit"
                    ? saveCompany(this.state.data)
                    : updateCompany(this.state.data);
                }}
                className="btn btn-primary text-uppercase"
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CompanyEditorModal;
