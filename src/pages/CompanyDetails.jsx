import React, { Component } from "react";
import CompanyNavbar from "../components/routes/companyDetails/companyNavbar";
import CompanyDetailsCard from "../components/routes/companyDetails/companyDetailsCard";
import CompanyUsers from "../components/routes/companyDetails/companyUsers";
import CompanyEditor from "../components/routes/companyDetails/companyEditor";
import UserEditorFooter from "../components/routes/users/userEditorFooter";
import { getCompanyById } from "../services/companies";
import { deleteCompany } from "../services/companies";
import { restoreCompany } from "../services/companies";
import { updateCompany } from "../services/companies";
import { updateUser, createUser, deleteUser } from "../services/users";

class CompanyDetails extends Component {
  state = {
    company: {
      _id: "",
      name: "",
      address: "",
      isActive: true,
      ownedBy: "",
      users: [],
    },
    editorModalShow: false,
    userModalShow: false,
    selectedUserUpdate: null,
  };

  handleDelete = async () => {
    await deleteCompany(this.state.company._id);
    const data = { ...this.state };
    data.company.isActive = false;
    data.editorModalShow = false;
    this.setState(data);
  };

  handleRestore = async () => {
    await restoreCompany(this.state.company._id);
    const data = { ...this.state };
    data.company.isActive = true;
    data.editorModalShow = false;
    this.setState(data);
  };

  handleUpdate = async (data) => {
    await updateCompany(this.state.company._id, data);
    const company = { ...this.state.company };
    Object.assign(company, data);
    const currentState = { ...this.state };
    currentState.company = company;
    currentState.editorModalShow = false;
    this.setState(currentState);
  };

  handleShowModal = (val) => {
    const data = { ...this.state };
    data.editorModalShow = val;
    this.setState(data);
  };

  handleShowUserModal = (val) => {
    const data = { ...this.state };
    data.userModalShow = val;
    if (val === false) data.selectedUserUpdate = null;
    this.setState(data);
  };

  handleUpdateUserModal = (user) => {
    const data = { ...this.state };
    data.selectedUserUpdate = user;
    data.userModalShow = true;
    this.setState(data);
  };

  handleUpdateUser = async (data) => {
    await updateUser(data);
    const currentState = { ...this.state };
    const company = { ...this.state.company };
    const index = company.users.findIndex((user) => user._id === data._id);
    const user = company.users[index];
    Object.assign(user, data);
    company.users[index] = user;
    currentState.company = company;
    currentState.userModalShow = false;
    this.setState(currentState);
  };

  handleSaveUser = async (data) => {
    const user = await createUser({
      ...data,
      Company_id: this.state.company._id,
    });
    const currentState = { ...this.state };
    if (!user) {
      currentState.userModalShow = false;
      this.setState(currentState);
    } else {
      const company = { ...this.state.company };
      company.users.push(user);
      currentState.company = company;
      currentState.userModalShow = false;
      this.setState(currentState);
    }
  };

  handleDeleteUser = async (user) => {
    await deleteUser(user._id);
    const currentState = { ...this.state };
    const company = { ...this.state.company };
    const newUsers = company.users.filter((u) => u._id !== user._id);
    company.users = newUsers;
    currentState.company = company;
    currentState.userModalShow = false;
    this.setState(currentState);
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const company = await getCompanyById(params.id);
    this.setState({ company: company[0] });
  }
  render() {
    const { name, address, ownedBy, users, isActive } = this.state.company;
    return (
      <React.Fragment>
        <CompanyNavbar
          name={name}
          isActive={isActive}
          restoreCompany={this.handleRestore}
        />
        <CompanyDetailsCard address={address} ownedBy={ownedBy} />
        <CompanyEditor
          company={this.state.company}
          isActive={isActive}
          modalShow={this.state.editorModalShow}
          setModalShow={this.handleShowModal}
          deleteCompany={this.handleDelete}
          restoreCompany={this.handleRestore}
          updateCompany={this.handleUpdate}
        />
        <CompanyUsers
          users={users}
          updateUserModal={this.handleUpdateUserModal}
        />
        <UserEditorFooter
          modalShow={this.state.userModalShow}
          setModalShow={this.handleShowUserModal}
          user={this.state.selectedUserUpdate}
          updateUser={this.handleUpdateUser}
          saveUser={this.handleSaveUser}
          deleteUser={this.handleDeleteUser}
        />
      </React.Fragment>
    );
  }
}

export default CompanyDetails;
