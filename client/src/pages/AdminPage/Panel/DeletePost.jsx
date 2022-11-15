import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import s from "./Panel.module.scss";

const DeletePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");

  const onSubmit = async (data) => {
    await axios
      .delete(`http://127.0.0.1:8000/delete/${data.id}/`)
      .catch((e) => e);
  };

  const idHandle = async (id) => {
    await axios
      .get(`http://127.0.0.1:8000/mura/${id}/`)
      .then((res) => setTitle(res.data.kaztitle));
  };

  return (
    <div className={`${s.panel}  ${s.deletePost}`}>
      <h3>Удалить пост</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.delete}>
          <input
            type="text"
            placeholder="Введите номер статьи"
            {...register("id", { required: "Обязательное поле" })}
            onChange={(e) => idHandle(e.target.value)}
          />
          <input
            type="text"
            {...register("title", { required: "Обязательное поле" })}
            value={title}
          />
        </div>
        <button style={{ backgroundColor: "red" }}>Удалить</button>
      </form>
    </div>
  );
};

export default DeletePost;
