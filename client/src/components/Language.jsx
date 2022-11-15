import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { language } from "../app/features/language/languageSlice";
import Back from "./Back";

const Language = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  const liHandler = (index) => {
    setCurrentIndex(index);
    dispatch(language(index));
  };

  return (
    <div className="container">
      <ul className="language">
        {["ҚАЗ", "РУС", "EN"].map((el, index) => (
          <li
            key={el}
            onClick={() => liHandler(index)}
            className={index === currentIndex ? "activ" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
