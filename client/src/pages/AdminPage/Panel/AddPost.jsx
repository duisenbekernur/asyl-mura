import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "./Panel.module.scss";
import cityNamesKaz from "../../../const/cityNamesKaz";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cityRef = useRef();

  const getIndexOfCity = () => {
    for (let i = 0; i < 18; i++) {
      if (cityRef.current.value === cityNamesKaz[i]) {
        return i;
      }
    }
  };

  const onSubmit = async (data) => {
    const mura = {
      kaztitle: data.kaztitle,
      entitle: data.entitle,
      rutitle: data.rutitle,
      kazbody: data.kazbody,
      rubody: data.rubody,
      enbody: data.enbody,
      region: getIndexOfCity(),
      image: "5.png",
    };

    await axios.post("http://127.0.0.1:8000/mura/", mura);

    toast("Артикль успешно добавлен!");
  };

  return (
    <div className={s.panel}>
      <h3>Добавить статью</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Зоголовок статьи(kz):</p>
          <input
            type="text"
            {...register("kaztitle", { required: "Обязательное поле" })}
          />
        </div>
        <hr />
        <div>
          <p>Зоголовок статьи(ru):</p>
          <input
            type="text"
            {...register("rutitle", { required: "Обязательное поле" })}
          />
        </div>
        <hr />
        <div>
          <p>Зоголовок статьи(en):</p>
          <input
            type="text"
            {...register("entitle", { required: "Обязательное поле" })}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(kz):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("kazbody", { required: "Обязательное поле" })}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(ru):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("rubody", { required: "Обязательное поле" })}
          />
        </div>
        <hr />
        <div>
          <p>Основная часть(en):</p>
          <textarea
            className="large-input"
            type="text"
            {...register("enbody", { required: "Обязательное поле" })}
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddPost;
