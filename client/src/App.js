import "./App.css";
import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Navbarr from "./components/navbar";
import Movies from "./components/movies";
import Favorites from "./components/Favorites";
import OneMovie from "./components/OneMovie"

function App() {
  return <div className="App">
<Navbarr/>
    <Routes>
      <Route path={"/movies"} element={<Movies />} />
      <Route path={"/favorites"} element={<Favorites/>}/>
      <Route path={"/OneMovie/:id"} element={<OneMovie/>}/>
    </Routes>
  </div>;
}

export default App;
