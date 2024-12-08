import { getToken } from "../utils/Cookies.js";

const baseUrl = "http://localhost:8090";

const userApi = {
  signup: async (user) => {
    let req = await fetch(`${baseUrl}/user/signup`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    let res = await req.json();
    Cookies.set("token", res.token, { expires: 1 / 24 });
    Cookies.set("isVerified", res.isVerified);
    console.log(res);
    window.location.href = "/";
  },

  login: async (user) => {
    let req = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    let res = await req.json();
    if (res.isActive) {
      Cookies.set("token", res.token, { expires: 1 / 24 });
      Cookies.set("isVerified", res.isVerified);
      window.location.href = "/";
    } else {
      alert("not activated");
    }
  },

  delete: async (id) => {
    await fetch(`${baseUrl}/user/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  verifyadmin: async (id) => {
    let req = await fetch(`${baseUrl}/user/verifyadmin/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    let res = await req.json();
    console.log(res);
  },
};

export default userApi;
