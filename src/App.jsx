import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddSong from "./pages/AddSong";
import ListAlbum from "./pages/ListAlbum";
import AddAlbum from "./pages/AddAlbum";
import ListSong from "./pages/ListSong";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <div className="flex flex-col">
        Admin panel
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-song" element={<AddSong />} />
          <Route path="/all-songs" element={<ListSong />} />
          <Route path="/add-album" element={<AddAlbum />} />
          <Route path="/all-albums" element={<ListAlbum />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
