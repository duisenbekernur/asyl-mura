import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./Memorials.module.scss";
import { useDispatch } from "react-redux";
import { currentCity } from "../../app/features/currentCity/currentCitySlice";

import cityNamesEn from "../../const/cityNamesEn";
import cityNamesKaz from "../../const/cityNamesKaz";
import muraImg from "../../const/muraImg";

const MemorialsPage = () => {
  const dispatch = useDispatch();

  // (muras);
  return (
    <div className="container">
      <div className="container__header">
        <h1>Қалалар тізімі</h1>
      </div>

      <div className={s.memorials__cities}>
        {cityNamesKaz.map((item, index) => (
          <Link key={index} to={`/memorials/${cityNamesEn[index]}/`}>
            <div className={s.city} onClick={() => dispatch(currentCity(item))}>
            <img src={require(`../../img/cities/${muraImg[index]}`)} alt="" />
              <h1>{item}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MemorialsPage;
