import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
