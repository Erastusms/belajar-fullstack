import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

export default function CardItem(props) {
  const { id, name, price, category } = props.item;
  const history = useHistory()
  const URL = "http://localhost:3000";
  const deleteItemHandler = (id) => {
    // Try me!
    // Swal.fire({
    //     title: `${name}`,
    //     text: `${category}`,
    //     imageUrl: 'https://unsplash.it/400/200',
    //     imageWidth: 400,
    //     imageHeight: 200,
    //     imageAlt: 'Custom image',
    // })
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "DELETE",
            url: `${URL}/items/delete/${id}`,
          });
          history.push("/items")
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
    }
  };

  return (
    <div className="col-md-2 col-sm-3 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src="http://via.placeholder.com/150"
          alt=" "
        />
        <div className="card-body">
          <h5>{name}</h5>
          <small className="badge bg-primary">{category}</small>
          <h5>{price}</h5>
        </div>
        <div className="card-footer">
          {/* <Link to={`/items/${id}`} className="btn btn-sm btn-primary">
            Details item
          </Link> */}
          <button
            onClick={() => deleteItemHandler(id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
          <Link className="btn btn-primary" to={`/items/edit/${id}`}>
            Edit Items
          </Link>
        </div>
      </div>
    </div>
  );
}
