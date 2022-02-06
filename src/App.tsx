import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
