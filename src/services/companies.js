import axios from "axios";

const url = "http://localhost:3030/api/companies";
const testUrl = "https://companly-be.herokuapp.com/api/companies";

export async function getCompanies() {
  try {
    let numActive = 0;
    let numInactive = 0;
    const companies = [];
    const response = await axios.get(testUrl);
    response.data.forEach((company) => {
      companies.push(company);
      if (company.isActive) numActive++;
      else numInactive++;
    });
    return { companies, numActive, numInactive };
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCompanyById(id) {
  try {
    const response = await axios.get(`${testUrl}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
