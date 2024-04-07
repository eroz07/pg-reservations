import axios from "axios"

const getAllProducts = () => {
  return axios.get(`${process.env.REACT_APP_API_HOST_URL}/products`);
}

const getProductByUUID = (uuid) => {
  return axios.get(`${process.env.REACT_APP_API_HOST_URL}/products/${uuid}`);
}

export default {
  getAllProducts,
  getProductByUUID
}