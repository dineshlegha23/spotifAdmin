import React from "react";
import { assets } from "../assets/assets";

const Song = ({ name, album, image, duration }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center pl-2 border py-2">
      <img
        src={image ? image : assets.img1}
        className="w-10"
        alt="song image"
      />
      <p>{name}</p>
      <p className="text-zinc-500">{album}</p>
      <p className="text-zinc-500 pl-2">{duration}</p>
      <p className="pl-4">X</p>
    </div>
  );
};

export default Song;
