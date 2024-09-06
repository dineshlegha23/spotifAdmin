import React, { useState, useEffect } from "react";
import Album from "../components/Album";
import { toast } from "react-toastify";
import axios from "axios";

const ListAlbum = () => {
  const [albums, setAlbums] = useState();

  const fetchAlbums = async () => {
    try {
      const response = await axios(
        "https://spotif-backend.onrender.com/api/v1/albums"
      );
      console.log(response.data.data);

      setAlbums(response.data.data);
    } catch (err) {
      toast.error(err.response.data.msg);
      console.log(err);
    }
  };

  const deleteAlbum = async (id) => {
    console.log({ id });

    try {
      const response = await axios.delete(
        "https://spotif-backend.onrender.com/api/v1/albums",
        { data: { id } }
      );
      toast.success(response.data.msg);
      console.log(response);
      fetchAlbums();
      if (response.status === 200) {
        toast.success("Deleted");
      }
    } catch (err) {
      toast.error(err.response.data.msg);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <section>
      <p className="my-6">All Songs List</p>
      <div className="border-2">
        <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr] bg-gray-300 py-2 pl-2">
          <p>Image</p>
          <p>Name</p>
          <p>Album</p>
          <p>Colour</p>
          <p>Action</p>
        </div>
        <div>
          {albums &&
            albums.map((album) => {
              return (
                <Album {...album} key={album._id} deleteAlbum={deleteAlbum} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ListAlbum;
