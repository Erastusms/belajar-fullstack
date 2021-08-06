import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemService from "../service/ItemService";
import { CardItem } from "../components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ItemsPage() {
  const URL = "http://localhost:3000";
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("use effect jalan");
    // getItems();
    retrieveItems();
  }, []);

  // const getItems = async () => {
  //   try {
  //     let itemsData = await axios({
  //       method: "GET",
  //       url: `${URL}/items`,
  //     });
  //     setItems(itemsData.data);
  //     console.log(itemsData.data);
  //   } catch (err) {
  //     Swal.fire("Get Error", `${err}`, "error");
  //   }
  // };

  const retrieveItems = async () => {
    try {
      let response = await ItemService.getAllItems();
      // .then((response) => {
      setItems(response.data);
      console.log(response.data);
      // })
    } catch (e) {
      console.log(e);
    }
  };

  const loadingText = () => {
    return (
      <div className="bg-light">
        <p className="text-center font-weight-bold">Loading.. Please Wait..</p>
      </div>
    );
  };

  return (
    <>
      <div className="text-center">
        <h1>Items Page</h1>
        <Link className="btn btn-primary" to="/items/add">
          Add Items
        </Link>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {items.length === 0
            ? loadingText()
            : items.map((item) => {
                return <CardItem key={item.id} item={item} />;
              })}
        </div>
      </div>
    </>
  );
}
