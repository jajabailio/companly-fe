import React, { Component } from "react";
import CompanyDashboard from "../components/routes/company/companyDashboard";
import CompanyList from "../components/routes/company/companyList";
import AddCompanyButton from "../components/routes/company/addCompanyButton";
import { getCompanies } from "../services/companies";

class Copmany extends Component {
  state = {
    companies: [],
    numActive: 0,
    numInactive: 0,
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
        <AddCompanyButton />
      </React.Fragment>
    );
  }
}

export default Copmany;
