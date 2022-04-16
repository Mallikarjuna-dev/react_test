import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ResponsiveAppBar} from './NavBar';
import Cities from './Cities';
import Countries from "./Countries";
import React from "react";
import Homepage from "./Homepage";

export const Routers = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path={"/cities/"} element={<Cities />} />
        <Route path={"/countries/"} element={<Countries />} />
      </Routes>
    </>
  );
};
