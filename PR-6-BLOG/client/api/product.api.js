
import { getToken } from "../utils/Cookies.js";
import { getBaseUrl } from "./config/api.config.js";

const baseUrl = getBaseUrl();

const productApi = {
  get: async () => {
    let product = await fetch(`${baseUrl}/products`);
    return product.json();
  },

  post: async (data) => {
    let product = await fetch(`${baseUrl}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: data,
    });
    return product.json();
  },

  getById: async (id) => {
    let product = await fetch(`${baseUrl}/products/${id}`);
    return product.json();
  },

  patch: async (id, data) => {
    let product = await fetch(`${baseUrl}/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    });
    return product.json();
  },

  delete: async (id) => {
    let product = await fetch(`${baseUrl}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return product.json();
  },
};

export default productApi;
  