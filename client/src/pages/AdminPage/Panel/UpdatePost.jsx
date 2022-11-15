import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import s from "./Panel.module.scss";
import cityNamesKaz from "../../../const/cityNamesKaz";

const UpdatePost = () => {
  const [mura, setMura] = useState({});
  const [kaztitle, setKaztitle] = useState("");
  const [rutitle, setRutitle] = useState("");
  const [entitle, setEntitle] = useState("");
  const [kazbody, setKazbody] = useState("");
  const [rubody, setRubody] = useState("");
  const [enbody, setEnbody] = useState("");

  const cityRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getIndexOfCity = () => {
    for (let i = 0; i < 18; i++) {
      if (cityRef.current.value === cityNamesKaz[i]) {
        return i;
      }
    }
  };

  const onSubmit = async (data) => {
    setMura({
      kaztitle,
      rutitle,
      entitle,
      kazbody,
      rubody,
      enbody,
      region: getIndexOfCity(),
      image: "5.png",
    });
    await axios.put(`http://127.0.0.1:8000/update/${data.id}/`, mura);
  };

  const idHandler = async (id) => {
    await axios.get(`http://127.0.0.1:8000/mura/${id}/`).then((res) => {
      setMura(res.data);
    });

    setKazbody(mura.kazbody);
    setRubody(mura.rubody);
    setEnbody(mura.enbody);
    setKaztitle(mura.kaztitle);
    setRutitle(mura.rutitle);
    setEntitle(mura.entitle);
  };

  return (
    <div className={s.panel}>
      <h3>Редактировать статью</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.updateId}>
          <input
          // className={s.updateId}
            type="text"
            placeholder="Введите номер статьи"
            {...register("id")}
            onChange={(e) => idHandler(e.target.value)}
          />
        </div>
        <div>
          <p>Зоголовок статьи(kz):</p>
          <input
            type="text"
            {...register("kaztitle")}
            onChange={(e) => setKaztitle(e.target.value)}
            value={kaztitle}
          />
        </div>
        <hr />
        <div>
          <p>Зоголовок статьи(ru):</p>
          <input
            type="text"
            {...register("rutitle")}
            onChange={(e) => setRutitle(e.target.value)}
            value={rutitle}
          />
        </div>
        <hr />
        <div>
          <p>Зоголовок статьи(en):</p>
          <input
            type="text"
            {...register("entitle")}
            onChange={(e) => setEntitle(e.target.value)}
            value={entitle}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(kz):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("kazbody")}
            value={kazbody}
            onChange={(e) => setKazbody(e.target.value)}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(ru):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("rubody")}
            value={rubody}
            onChange={(e) => setRubody(e.target.value)}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(en):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("enbody")}
            value={enbody}
            onChange={(e) => setEnbody(e.target.value)}
          />
        </div>

        <hr />

        <span>
          {
            "Примечание: Допустимо использование html тегов: <p>, <br>, <b> и т.д. для разметки текста. "
          }
        </span>
        <span>
          {
            "Например: Если хотите переместить строку на след абзац, в начале и в конце абзаца напишите <p>Текст</p>"
          }
        </span>

        <hr />
        <div>
          <p>Выбрать регион: </p>
          <select ref={cityRef} name="cities">
            {cityNamesKaz.map((city, index) => (
              <option key={index} value={city} name="region">
                {city} облысы бойынша мемориалды кешендер
              </option>
            ))}
          </select>
        </div>
        <hr />

        <div>
          <p>Выбрать картинки</p>
          <input type="file" name="image" />
        </div>

        <button>Сохранить</button>
      </form>
    </div>
  );
};

export default UpdatePost;
