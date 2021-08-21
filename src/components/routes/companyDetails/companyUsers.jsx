import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const CompanyUsers = ({ users, updateUserModal }) => {
  return (
    <div className="container">
      <div className="container mb-4">
        <hr />
        <h1 className="text-center">Users</h1>
      </div>
      {users.map((user) => (
        <div className="card p-2 border-0" key={user._id}>
          <div className="row w-100" style={{ height: "70px" }}>
            <div className="col-2 m-auto text-center">
              <FaPencilAlt
                className="fs-1"
                onClick={() => updateUserModal(user)}
              />
            </div>
            <div
              className="col-7 px-2 py-0 m-0 h-100"
              style={{ backgroundColor: "#eaeaea" }}
            >
              <h3>{user.firstName + " " + user.lastName}</h3>
              <p className="text-decoration-underline">{user.email}</p>
            </div>
            <div className="col-3" style={{ backgroundColor: "#eaeaea" }}>
              <p className="fs-3">{user.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyUsers;
