import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "../config/layout";
import Home from "../pages/Home";
import ListStudents from "../pages/ListStudents";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault componet={<Home />} />} />
        <Route
          path="/lista-estudantes"
          element={<LayoutDefault componet={<ListStudents />} />}
        />
        <Route
          path="/perfil"
          element={<LayoutDefault componet={<Profile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
