import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Language from "../../components/Language";
import articleImg from "../../const/articleImg";
import { language } from "../../app/features/language/languageSlice";
import Back from "../../components/Back";

const methodsOfMura = [
  "kaztitle",
  "rutitle",
  "entitle",
  "kazbody",
  "rubody",
  "enbody",
];

const Article = () => {
  const [currentMura, setCurrentMura] = useState({});
  const [notFound, setNotFound] = useState(true);
  const dispatch = useDispatch();

  const id = useSelector((state) => state.id.value);
  const indexOfLanguage = useSelector((state) => state.language.value);

  useEffect(() => {
    async function getMura() {
      await axios
        .get(`http://127.0.0.1:8000/mura/${articleId}/`)
        .then((res) => {
          setCurrentMura(res.data);
          if (currentMura.id === undefined) {
            setNotFound(false);
          }
        });

      dispatch(language(0));
    }
    getMura();
  }, []);

  const articleId = useParams().id;

  const titleMethod = methodsOfMura[indexOfLanguage];
  const bodyMethod = methodsOfMura[indexOfLanguage + 3];

  return (
    <div>
      {notFound && <NotFound />}

      {!notFound && (
        <div className="container">
          <div className="back-language-container">
            <Back />
            <Language />
          </div>
          <div className="container__header">
            <h1>{currentMura[titleMethod]}</h1>
          </div>
          <div className="container__header">
            <p>{currentMura[bodyMethod]}</p>
          </div>
          <div className="container__header">
            <img
              src={require(`../../img/article-images/${
                articleImg[articleId] === undefined
                  ? articleImg[0]
                  : articleImg[articleId]
              }`)}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
