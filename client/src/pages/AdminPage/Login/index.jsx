import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "./Login.module.scss";

const Index = ({ setIsAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.name === process.env.REACT_APP_ADMIN_LOGIN) {
      if (data.password === process.env.REACT_APP_ADMIN_PASSWORD) {
        setIsAuth(true);
        return;
      }
    }

    toast("Ошибка данных!!!");
  };

  return (
    <div className={s.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>АДМИН</h3>

        <p>Логин</p>
        <input
          {...register("name", { required: "Обязательное поле" })}
          type="text"
          placeholder="login"
        />
        {errors.name && <span>{errors.name.message}</span>}

        <p>Пароль</p>
        <input
          {...register("password", { required: "Обязательное поле" })}
          type="password"
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">ВОЙТИ</button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
};

export default Index;
