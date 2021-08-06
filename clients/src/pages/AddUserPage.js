import React, { useState } from "react";
import axios from "axios";
import UserService from "../service/ItemService";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function AddUserPage() {
  const URL = "http://localhost:3000";
  const initialUserState = {
    id: null,
    name: "",
    gender: "",
    age: "",
  };
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [age, setAge] = useState("");
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  // const submitHandler = (e) => {
  //   e.preventDefault("");

  //   let objTemp = {
  //     name,
  //     gender,
  //     age,
  //   };
  //   addUsers(objTemp, e);
  // };

  const handleInputChange = (e) => {
    e.preventDefault("");

    // let objTemp = {
    //   name,
    //   price,
    //   category,
    //   userId,
    // };
    // addItems(objTemp, e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const addUsers = async (user, e) => {
  //   try {
  //     const { name, gender, age } = user;
  //     await axios({
  //       method: "POST",
  //       url: `${URL}/users/add`,
  //       data: {
  //         name,
  //         gender,
  //         age,
  //       },
  //     });

  //     Swal.fire("Post Items", "Items have been submitted", "success");
  //     history.push("/users");
  //   } catch (err) {
  //     Swal.fire("Post Error", `${err}`, "error");
  //     // console.log(err)
  //   }
  // };
  const saveUser = () => {
    let data = {
      name: user.name,
      gender: user.gender,
      age: user.age,
    };

    UserService.createUser(data)
      .then((response) => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          gender: response.data.gender,
          age: response.data.age,
        });
        // setSubmitted(true);
        console.log(response.data);
        Swal.fire("Post Items", "Items have been submitted", "success");
        history.push("/users");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const newUser = () => {
  //   setUser(initialUserState);
  //   // setSubmitted(false);
  // };

  return (
    <div className="container-fluid">
      <div className="card m-5 d-flex justify-content-center">
        <div className="card-header bg-secondary text-white text-center">
          Form Add Users
        </div>
        <div className="card-body">
          <form>
            <div className="m-4">
              <label for="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                // onChange={(e) => setName(e.target.value)}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="m-4">
              <label for="gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                // onChange={(e) => setGender(e.target.value)}
                onChange={handleInputChange}
                placeholder="Male or Female"
                required
              />
            </div>
            <div className="m-4">
              <label for="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                // onChange={(e) => setAge(e.target.value)}
                onChange={handleInputChange}
                placeholder="ex: 20"
                required
              />
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary"
                // onClick={(e) => submitHandler(e)}
                onClick={saveUser}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
