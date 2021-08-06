import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components";
import {
  Homepage,
  ItemsPage,
  UsersPage,
  AddItemPage,
  AddUserPage,
  EditItemPage,
  NotFoundPage
} from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/items" component={ItemsPage}></Route>
            <Route exact path="/users" component={UsersPage}></Route>
            <Route path="/items/add" component={AddItemPage}></Route>
            <Route path="/users/add" component={AddUserPage}></Route>
            <Route path="/items/edit/:id" component={EditItemPage}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
