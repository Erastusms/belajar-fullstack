import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemService from "../service/ItemService";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router-dom";

export default function EditItemPage() {
  const params = useParams();
  console.log(params.id);
  // const initialState = {
  //   id: null,
  //   name: "",
  //   price: 0,
  //   category: "",
  //   UserId: 0,
  // };
  const [item, setItem] = useState("");
  const id = +params.id;
  const URL = "http://localhost:3000";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();

  // const initialItemState = {
  //   id: null,
  //   name: "",
  //   price: "",
  //   category: "",
  //   status: "",
  //   UserId: null,
  // };
  // const [currentItem, setCurrentItem] = useState(initialItemState);
  // const [message, setMessage] = useState("");

  // const getItemById = id => {
  //   ItemService.get(id)
  //     .then(response => {
  //       setCurrentItem(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  // useEffect(() => {
  //   getItemById(props.match.params.id);
  // }, [props.match.params.id]);

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentItem({ ...currentItem, [name]: value });
  // };

  // const updateItem = () => {
  //   ItemService.updateItem(currentItem.id, currentItem)
  //     .then(response => {
  //       console.log(response.data);
  //       setMessage("The tutorial was updated successfully!");
  //       Swal.fire("Post Items", "Items have been submitted", "success");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       Swal.fire("Post Error", `${e}`, "error");
  //     });
  // };
  useEffect(() => {
    getItemById();
  }, []);

  const getItemById = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: `${URL}/items/${id}`,
      });
      const { name, price, category, UserId } = result.data;
      // setItem(result.data);
      setName(name);
      setPrice(price);
      setCategory(category);
      setUserId(UserId);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault("");

    let objTemp = {
      name,
      price,
      category,
      userId,
    };
    editItems(objTemp, e);
  };

  const editItems = async (item, e) => {
    try {
      // const id = e.params.id;
      const { name, price, category, UserId } = item;
      await axios({
        method: "PUT",
        url: `${URL}/items/edit/${id}`,
        data: {
          name,
          price,
          category,
          UserId,
        },
      });

      Swal.fire("Post Items", "Items have been submitted", "success");
      history.push("/items");
    } catch (err) {
      Swal.fire("Post Error", `${err}`, "error");
      // console.log(err)
    }
  };

  return (
    <div className="container-fluid">
      <div className="card m-5 d-flex justify-content-center">
        <div className="card-header bg-secondary text-white text-center">
          Form Add Items
        </div>
        <div className="card-body">
          <form>
            <div className="m-4 form-group">
              <label for="name" className="form-label">
                Items Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // value={currentItem.name}
                // onChange={handleInputChange}
                placeholder="Items name"
                required
              />
            </div>
            <div className="m-4 form-group">
              <label for="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                // value={currentItem.price}
                // onChange={handleInputChange}
                placeholder="ex: 15000"
                required
              />
            </div>

            <div className="m-4 form-group">
              <label for="name" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                // value={currentItem.category}
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
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={(e) => submitHandler(e)}
                // onClick={updateItem}
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
