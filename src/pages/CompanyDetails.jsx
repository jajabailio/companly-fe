import React, { Component } from "react";
import CompanyNavbar from "../components/routes/companyDetails/companyNavbar";
import CompanyDetailsCard from "../components/routes/companyDetails/companyDetailsCard";
import CompanyUsers from "../components/routes/companyDetails/companyUsers";
import { getCompanyById } from "../services/companies";

class CompanyDetails extends Component {
  state = {
    company: { name: "", address: "", isActive: true, ownedBy: "", users: [] },
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    try {
      const company = await getCompanyById(params.id);
      this.setState({ company: company[0] });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { name, address, ownedBy, users } = this.state.company;
    return (
      <React.Fragment>
        <CompanyNavbar name={name} />
        <CompanyDetailsCard address={address} ownedBy={ownedBy} />
        <CompanyUsers users={users} />
      </React.Fragment>
    );
  }
}

export default CompanyDetails;
