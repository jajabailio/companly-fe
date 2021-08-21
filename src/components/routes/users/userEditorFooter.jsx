import React from "react";
import { NavLink } from "react-router-dom";
import UserEditorModal from "./userEditorModal";

const UserEditorFooter = ({
  modalShow,
  setModalShow,
  user,
  updateUser,
  saveUser,
  deleteUser,
}) => {
  return (
    <React.Fragment>
      <div className="container mt-5 d-flex justify-content-between">
        <NavLink to="/">
          <button className="btn btn-default text-primary text-uppercase fs-5 fw-bold">
            Back
          </button>
        </NavLink>

        <button
          className="btn btn-primary text-uppercase"
          onClick={() => setModalShow(true)}
        >
          Add User
        </button>
      </div>
      {modalShow && (
        <UserEditorModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={user}
          saveType={!user ? "new" : "edit"}
          updateUser={updateUser}
          saveUser={saveUser}
          deleteUser={deleteUser}
        />
      )}
    </React.Fragment>
  );
};

export default UserEditorFooter;
