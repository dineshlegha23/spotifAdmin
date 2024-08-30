import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import Song from "../components/Song";
import { toast } from "react-toastify";

const ListSong = () => {
  const [songs, setSongs] = useState();

  const fetchSongs = async () => {
    const response = await axios("http://localhost:5000/api/v1/songs");
    setSongs(response.data.data);
  };

  const deleteSong = async (id) => {
    console.log({ id });

    try {
      const response = await axios.delete(
        "http://localhost:5000/api/v1/songs",
        { data: { id } }
      );
      toast.success(response.data.msg);
      console.log(response);
      fetchSongs();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <section>
      <p className="my-6">All Songs List</p>
      <div className="border-2">
        <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr] bg-gray-300 py-2 pl-2">
          <p>Image</p>
          <p>Name</p>
          <p>Album</p>
          <p>Duration</p>
          <p>Action</p>
        </div>
        <div>
          {songs &&
            songs.map((song) => {
              return <Song {...song} key={song._id} deleteSong={deleteSong} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ListSong;
