import React from "react";
import Form from "../../common/form";
import Modal from "react-bootstrap/Modal";
import Joi from "joi-browser";

class UserEditorModal extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", role: "Owner" },
    errors: {},
    roles: [
      {
        _id: 1,
        name: "Owner",
      },
      {
        _id: 2,
        name: "Admin",
      },
      {
        _id: 3,
        name: "Support",
      },
      {
        _id: 4,
        name: "Tech",
      },
    ],
  };

  schema = {
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    email: Joi.string().required().label("Email"),
    role: Joi.string()
      .required()
      .valid("Admin", "Owner", "Support", "Tech")
      .label("Role"),
  };

  componentDidMount() {
    const currentState = { ...this.state };
    if (!this.props.user) return;

    currentState.data = this.props.user;
    this.setState(currentState);
  }

  render() {
    const { show, onHide, user, saveType, deleteUser, updateUser, saveUser } =
      this.props;
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
          <h2 className="text-center mb-5 text-primary">Save User Details</h2>
          <form className="mt-3" onSubmit={this.handleSubmit}>
            <div className="form-group mb-4">
              {this.renderInput("firstName", "First name")}
            </div>
            <div className="form-group mb-4">
              {this.renderInput("lastName", "Last name")}
            </div>
            <div className="form-group mb-4">
              {this.renderInput("email", "Email", "email")}
            </div>
            <div className="form-group mb-5">
              {this.renderSelect("role", "Role", this.state.roles)}
            </div>

            <div className="d-flex justify-content-around">
              {saveType === "edit" && (
                <button
                  type="button"
                  onClick={() => deleteUser(user)}
                  className="btn text-danger fw-bold text-uppercase"
                >
                  Delete
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  saveType !== "edit"
                    ? saveUser(this.state.data)
                    : updateUser(this.state.data);
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

export default UserEditorModal;
