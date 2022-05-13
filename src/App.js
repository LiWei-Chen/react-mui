import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Sidebar from "./sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Fragment>
            <Sidebar />
          </Fragment>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
