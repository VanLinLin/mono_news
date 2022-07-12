import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/App";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Bar from "./components/Bar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Bar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/PageOne" element={<PageOne />} />
      <Route path="/PageTwo" element={<PageTwo />} />
      <Route path="/PageThree" element={<PageThree />} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
