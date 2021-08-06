import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemService from "../service/ItemService";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function AddItemPage() {
  const URL = "http://localhost:3000";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  // const [items, setItems] = useState(initialItemState);
  // const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log("submit click");
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

  const handleInputChange = (e) => {
    e.preventDefault("");

    let objTemp = {
      name,
      price,
      category,
      userId,
    };
    addItems(objTemp, e);
    // const { name, value } = e.target;
    // setItems({ ...items, [name]: value });
  };

  const addItems = async (item, e) => {
    try {
      const { name, price, category, userId } = item;
      await axios({
        method: "POST",
        url: `${URL}/items/add`,
        data: {
          name,
          price,
          category,
          UserId: +userId,
        },
      });

      Swal.fire("Post Items", "Items have been submitted", "success");
      history.push("/items");
    } catch (err) {
      Swal.fire("Post Error", `${err}`, "error");
      // console.log(err)
    }
  };

  // const saveItem = () => {
  //   let data = {
  //     name: items.name,
  //     price: items.price,
  //     category: items.category,
  //   };

  //   ItemService.createItem(data)
  //     .then((response) => {
  //       setItems({
  //         id: response.data.id,
  //         name: response.data.name,
  //         price: response.data.price,
  //         category: response.data.category,
  //         status: response.data.status,
  //         UserId: response.data.UserId,
  //       });
  //       // setSubmitted(true);
  //       console.log(response.data);
  //       Swal.fire("Post Items", "Items have been submitted", "success");
  //       history.push("/items");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // const newItems = () => {
  //   setItems(initialItemState);
  //   // setSubmitted(false);
  // };

  return (
    <div className="container-fluid">
      <div className="card m-5 d-flex justify-content-center">
        {/* {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newItems}>
              Add
            </button>
          </div>
        ) : ( */}
        <div>
          <div className="card-header bg-secondary text-white text-center">
            Form Add Items
          </div>
          <div className="card-body">
            <form>
              <div className="m-4">
                <label htmlFor="name" className="form-label">
                  Items Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  // value={items.name}
                  // onChange={handleInputChange}
                  placeholder="Items name"
                  required
                />
              </div>
              <div className="m-4">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  // value={items.price}
                  // onChange={handleInputChange}
                  placeholder="15000"
                  required
                />
              </div>

              <div className="m-4">
                <label htmlFor="name" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  // value={items.category}
                  // onChange={handleInputChange}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  <option value="Comic">Comic</option>
                  <option value="Novel">Novel</option>
                  <option value="Biography">Biography</option>
                </select>
              </div>
              <div className="m-4">
                <label htmlFor="UserId" className="form-label">
                  User ID
                </label>
                <select
                  className="form-select"
                  id="UserId"
                  onChange={(e) => setUserId(e.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  {users.map((user) => {
                    return <option value={user.id}>{user.id}</option>;
                  })}
                </select>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleInputChange(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
