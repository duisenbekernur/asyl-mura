import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { id } from "../../../app/features/id/idSlice";

import s from "./Memorial.module.scss";

import cityNamesEn from "../../../const/cityNamesEn";
import cityNamesKaz from "../../../const/cityNamesKaz";

const Memorial = () => {
  const [muras, setMuras] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getMura() {
      await axios.get("http://127.0.0.1:8000/mura/").then((res) => {
        setMuras(res.data);
      });
    }
    getMura();
    return () => {};
  }, []);

  let cityNameInUrl = useParams().cityName;

  const findCityIndex = () => {
    for (let i = 0; i < cityNamesEn.length; i++) {
      if (cityNamesEn[i] === cityNameInUrl) {
        return i;
      }
    }
  };

  let city = cityNamesKaz[findCityIndex()];

  return (
    <div className="container">
      <div className="container__header">
        <h1>{city} облысының мемориалды орындары</h1>
      </div>

      {muras.filter(mura => mura.region == findCityIndex()) == 0 ? (
        <div className="container__header">
          <h3>Әзірше мемориалды орындар тіркелмеді</h3>
        </div>
      ) : (
        <div className={s.memorials}>
          {muras
            .filter((mura) => mura.region == findCityIndex())
            .map((mura, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/memorials/${cityNameInUrl}/${mura.id}`}
                onClick={() => dispatch(id(mura.id))}
              >
                <div>
                  <h3>{mura.kaztitle}</h3>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Memorial;
