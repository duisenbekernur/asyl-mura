import React, { useState } from "react";
import { Link } from "react-router-dom";

import s from "./Sidebar.module.scss";

const address = ["add", "update", "delete"];

const Sidebar = () => {
  const [activ, setActiv] = useState(0);

  return (
    <div className={s.sidebar}>
      <h3>АДМИН ПАНЕЛЬ</h3>

      <ul>
        {["Добавить", "Редактировать", "Удалить"].map((item, index) => (
          <Link
            key={index}
            onClick={() => setActiv(index)}
            className={index === activ ? s.activ : ""}
            to={`/admin/${address[index]}`}
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
