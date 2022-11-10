import React from "react";
import ReactDOM from "react-dom/client";
import AppCard from "./components/AppCard";
import AppProducts from "./basic/components/AppProducts";
import AppForm from "./components/AppForm";
import AppMentors from "./components/AppMentors";
import AppMentorsButton from "./components/AppmentorsButton";
import AppMentorsImmer from "./components/AppMentorsImmer";
import AppTheme from "./components/AppTheme";
import AppWrap from "./components/AppWrap";
import AppXY from "./components/AppXY";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
