/* eslint-disable import/no-anonymous-default-export */
import http from "../http-common";

const getAllItems = () => {
  return http.get("/items");
};

const get = id => {
  return http.get(`/items/${id}`);
};

const createItem = data => {
  return http.post("/items/add", data);
};

const updateItem = (id, data) => {
  return http.put(`/items/${id}`, data);
};

const remove = id => {
  return http.delete(`/items/${id}`);
};

const removeAll = () => {
  return http.delete(`/items`);
};

const findByTitle = title => {
  return http.get(`/items?title=${title}`);
};

export default {
  getAllItems,
  get,
  createItem,
  updateItem,
  remove,
  removeAll,
  findByTitle
};