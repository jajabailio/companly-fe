import React, { Component } from "react";
import CompanyDashboard from "../components/routes/company/companyDashboard";
import CompanyList from "../components/routes/company/companyList";
import AddCompanyButton from "../components/routes/company/addCompanyButton";
import { getCompanies, createCompany } from "../services/companies";

class Copmany extends Component {
  state = {
    companies: [],
    numActive: 0,
    numInactive: 0,
    editorModalShow: false,
  };

  handleShowModal = (val) => {
    const data = { ...this.state };
    data.editorModalShow = val;
    this.setState(data);
  };

  handelSave = async (data) => {
    const company = await createCompany(data);
    if (!company) {
      const currentState = { ...this.state };
      currentState.editorModalShow = false;
      this.setState(currentState);
    } else {
      company.users = [];
      const currentState = { ...this.state };
      currentState.companies.push(company);
      currentState.editorModalShow = false;
      this.setState(currentState);
    }
  };

  async componentDidMount() {
    const data = await getCompanies();
    this.setState(data);
  }

  render() {
    return (
      <React.Fragment>
        <CompanyDashboard
          active={this.state.numActive}
          inactive={this.state.numInactive}
          companiesLength={this.state.companies.length}
        />
        <CompanyList companies={this.state.companies} />
        <AddCompanyButton
          modalShow={this.state.editorModalShow}
          setModalShow={this.handleShowModal}
          saveCompany={this.handelSave}
        />
      </React.Fragment>
    );
  }
}

export default Copmany;
