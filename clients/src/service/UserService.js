/* eslint-disable import/no-anonymous-default-export */
import http from "../http-common";

const getAllUsers = () => {
  return http.get("/users");
};

const getUserById = (id) => {
  return http.get(`/users/${id}`);
};

const createUser = (data) => {
  return http.post("/users", data);
};

const updateItem = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByTitle = (title) => {
  return http.get(`/users?title=${title}`);
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateItem,
  remove,
  removeAll,
  findByTitle,
};
