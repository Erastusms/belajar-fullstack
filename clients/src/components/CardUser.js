import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

export default function CardItem(props) {
  const { id, name, gender, age } = props.user;

  const URL = "http://localhost:3001";
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
          <small className="badge bg-primary">{age}</small>
        </div>
        <div className="card-footer">
          {/* <Link to={`/users/${id}`} className="btn btn-sm btn-primary">
            Details user
          </Link>
          <button
            className="btn btn-sm btn-danger"
          >
            Delete
          </button> */}
          <h5>{gender}</h5>
        </div>
      </div>
    </div>
  );
}
