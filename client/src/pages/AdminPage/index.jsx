import React, { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import s from "./Admin.module.scss";
import Login from "./Login";
import AddPost from "./Panel/AddPost";
import DeletePost from "./Panel/DeletePost";
import Sidebar from "./Panel/Sidebar";
import UpdatePost from "./Panel/UpdatePost";

const Index = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className={s.admin}>
      {!isAuth ? <Login setIsAuth={setIsAuth} /> : <Sidebar />}
      {isAuth && (
        <>
          {/* <Navigate to="/admin/add"/> */}
          <Routes>
            <Route path="add" element={<AddPost />} />
            <Route path="delete" element={<DeletePost />} />
            <Route path="update" element={<UpdatePost />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Index;
