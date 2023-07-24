import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      {/* This provider components are for linking purpose (Link to react and redux) */}
      <Provider store = {store}>
        <App />
        <Toaster />
      </Provider>
  </BrowserRouter>
  
);
