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
    <div className="flex bg-zinc-100 cursor-default">
      <ToastContainer />
      <Sidebar />
      <div className="flex flex-col pl-10">
        <div className="w-[calc(100vw-400px)] mt-6">
          <h3 className="text-2xl mb-4">Admin Panel</h3>
          <hr className="border-[1px] mb-4" />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-song" index element={<AddSong />} />
          <Route path="/all-songs" element={<ListSong />} />
          <Route path="/add-album" element={<AddAlbum />} />
          <Route path="/all-albums" element={<ListAlbum />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
