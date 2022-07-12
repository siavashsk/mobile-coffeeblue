import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="mainBox">
        <img className="mainImage mx-auto" src="/images/logo.png" alt="logo" />
        <h1 className="mainTitle">کافه بلو</h1>
        <h6 className="mainDesc">برای آرامش و انگیزه ادامه دادن</h6>
      </div>
      <div className="mb-4">
        <Link to="/menu" className="mainBtn">
          نمایش منو
        </Link>
        <Link to="/login" className="underline text-xl text-slate-200">
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Main;
