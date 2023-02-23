import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import  App  from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./App";
// import Login from "./Pages/Login.jsx";
// import Art from "./Pages/Art.jsx";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="art" element={<Art />} />
//       <Route path="invoices" element={<Login />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

