import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/animate.css";
import "./assets/css/lineicons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./config/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
