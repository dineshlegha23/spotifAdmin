import React from "react";
import { assets } from "../assets/assets";

const Song = ({ _id: id, name, desc, duration, image, deleteSong }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center pl-2 border py-2">
      <img
        src={image ? image : assets.img1}
        className="w-10"
        alt="song image"
      />
      <p>{name}</p>
      <p className="text-zinc-500">{desc}</p>
      <p className="text-zinc-5000 pl-2">{duration}</p>
      <p className="pl-4 cursor-pointer" onClick={() => deleteSong(id)}>
        X
      </p>
    </div>
  );
};

export default Song;
