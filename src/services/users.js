import axios from "axios";

// const url = "http://localhost:3030/api/users";
const url = "https://companly-be.herokuapp.com/api/users";

export async function createUser(data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: true, data: err };
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return true;
  }
}

export async function updateUser(data) {
  try {
    const response = await axios({
      method: "put",
      url: `${url}/${data._id}`,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: true, data: err };
  }
}
