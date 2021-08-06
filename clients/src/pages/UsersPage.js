import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardUser } from "../components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function UsersPage() {
  const URL = "http://localhost:3000";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("use effect jalan");
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let usersData = await axios({
        method: "GET",
        url: `${URL}/users`,
      });
      setUsers(usersData.data);
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
    }
  };

  return (
    <>
      <div className="text-center">
        <h1>Users Page</h1>
        <Link to="/users/add" className="btn btn-primary">+Add Users</Link>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {users.map((user) => {
            return <CardUser key={user.id} user={user} />;
          })}
        </div>
      </div>
    </>
  );
}
