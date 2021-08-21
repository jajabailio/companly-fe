import axios from "axios";

// const url = "http://localhost:3030/api/companies";
const url = "https://companly-be.herokuapp.com/api/companies";

export async function getCompanies() {
  try {
    let numActive = 0;
    let numInactive = 0;
    const companies = [];
    const response = await axios.get(url);
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
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function createCompany(data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: true, data: err };
  }
}

export async function deleteCompany(id) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return true;
  }
}

export async function restoreCompany(id) {
  try {
    const response = await axios({
      method: "put",
      url: `${url}/restore/${id}`,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return true;
  }
}

export async function updateCompany(id, { name, address }) {
  try {
    const response = await axios({
      method: "put",
      url: `${url}/${id}`,
      data: { name, address },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: true, data: err };
  }
}
