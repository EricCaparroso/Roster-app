import axios from "axios";

const API_URL = "http://localhost:8081/api/v1";

/* FUNCION DE GET
const fetchGetAll = async () => {
  const response = await fetch(`${API_URL}/tutorials`);
  console.log(response);
  const tutorials = await response.json();

  return tutorials;
};
*/
const axiosGetAll = async () => {
  const responce = await axios(`${API_URL}/employees`);
  return responce.data;
};
const axiosGetAllById = async (id) => {
  const response = await axios(`${API_URL}/employee/${id}`);
  return response.data;
};

const axiosGetByName = async (name) => {
  const response = await axios(`${API_URL}/employees/by-name?name=${name}`);
  console.log(response.data);
  return response.data;
};

/* FUNCION DE CREAR
const fetchCreate = async () => {
  await fetch(`${API_URL}/tutorials`, {
    method: "POST",
    body: JSON.stringify({
      tittle: data.tittle,
      description: data.description,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
};
*/

//CREAR CON AXIOS
const axiosCreate = async (data) => {
  //              si fuera para buscar (`${API_URL}/tutorials/${id}`)
  const response = await axios.post(`${API_URL}/employees`, data);
  return response.data.data;
};

const axiosDelete = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/employee/${id}`);
    return response.data.data;
  } catch (error) {
    console.log("error en actorService delete by id");
    console.log(error);
  }
};
const axiosUpdate = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/employees/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("error en actorService Update by id");
    console.log(error);
  }
};

const TutorialService = {
  axiosGetAll,
  axiosGetAllById,
  axiosCreate,
  axiosDelete,
  axiosGetByName,
  axiosUpdate,
};

export default TutorialService;
