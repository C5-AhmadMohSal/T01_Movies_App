import "./App.css";
import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Navbarr from "./components/navbar";
import Movies from "./components/movies";
import Favorites from "./components/Favorites";

function App() {
  return <div className="App"> <br/>
<Navbarr/>
    <Routes>
      <Route path={"/movies"} element={<Movies />} />
      <Route path={"/favorites"} element={<Favorites/>}/>
    </Routes>

  </div>;
}

export default App;
