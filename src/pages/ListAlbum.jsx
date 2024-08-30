import React from "react";
import Album from "../components/Album";

const ListAlbum = () => {
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
          {/* {songs &&
            songs.map((song) => {
              return <Album {...song} key={song._id} deleteSong={deleteSong} />;
            })} */}
        </div>
      </div>
    </section>
  );
};

export default ListAlbum;
