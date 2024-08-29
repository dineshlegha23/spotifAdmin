import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="sticky inset-0 flex flex-col items-center w-[250px] py-10 h-screen bg-blue-400">
      <img src={assets.spotify_logo} alt="soptif logo" />
      <section className="mt-20 w-full pl-10 flex flex-col gap-2 [&_a]:bg-green-400 [&_a]:p-2 [&_a]:border-b-4 border-white">
        <NavLink
          to={"/add-song"}
          className={({ isActive }) =>
            `hover:border-black/60 hover:text-white ${
              isActive ? "border-black" : ""
            }`
          }
        >
          Add Song
        </NavLink>
        <NavLink
          to={"/all-songs"}
          onClick={() => navigate("/all-songs")}
          className={({ isActive }) =>
            `hover:border-black/60 hover:text-white ${
              isActive ? "border-black" : ""
            }`
          }
        >
          All Songs
        </NavLink>
        <NavLink
          to={"/add-album"}
          onClick={() => navigate("/add-album")}
          className={({ isActive }) =>
            `hover:border-black/60 hover:text-white ${
              isActive ? "border-black" : ""
            }`
          }
        >
          Add Album
        </NavLink>
        <NavLink
          to={"/all-albums"}
          onClick={() => navigate("/all-albums")}
          className={({ isActive }) =>
            `hover:border-black/60 hover:text-white ${
              isActive ? "border-black" : ""
            }`
          }
        >
          All Albums
        </NavLink>
      </section>
    </aside>
  );
};

export default Sidebar;
