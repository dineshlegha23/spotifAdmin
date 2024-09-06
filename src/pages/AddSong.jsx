import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { MdAudiotrack } from "react-icons/md";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";

const AddSong = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [singers, setSingers] = useState("");
  const [image, setImage] = useState("");
  const [album, setAlbum] = useState("Album 1");
  const [albums, setAlbums] = useState([]);
  const [audio, setAudio] = useState("");
  const [progress, setProgress] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("singers", singers);
    formData.append("album", album);
    formData.append("audio", audio);
    formData.append("image", image);

    console.log("sending");
    try {
      setLoading(true);
      const response = await axios.post(
        "https://spotif-backend.onrender.com/api/v1/songs",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            console.log(progressEvent.progress * 100),
              setProgress(Math.floor(progressEvent.progress * 100));
          },
        }
      );
      toast.success(response.data.msg);
      setLoading(false);
      setAlbum("album 1");
      setName("");
      setSingers("");
      setDesc("");
      setAudio("");
      setImage("");
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.msg);
      console.log(err);
    }
  };

  const fetchAlbums = async () => {
    const response = await axios(
      "https://spotif-backend.onrender.com/api/v1/albums"
    );
    setAlbums(response.data.data);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <section>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col [&_input]:border-green-700 [&_input]:border-2 w-[400px]"
      >
        <div className="flex items-center justify-center gap-20">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            // value={image}
            onChange={(e) => setImage(e.target.files[0])}
            hidden
          />
          <label htmlFor="image">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="max-w-28"
                alt="image"
              />
            ) : (
              <CiSquarePlus size={100} className="cursor-pointer" />
            )}
            Choose Image
          </label>
          <input
            type="file"
            name="audio"
            id="audio"
            accept="audio/*"
            // value={audio}
            onChange={(e) => setAudio(e.target.files[0])}
            hidden
          />
          <label htmlFor="audio">
            {audio ? (
              <TiTick size={100} className="border rounded-lg border-black" />
            ) : (
              <MdAudiotrack
                size={100}
                className="cursor-pointer bg-zinc-300 p-6 rounded-lg"
              />
            )}
            Choose Audio
          </label>
        </div>

        <label htmlFor="name" className="mt-14">
          Enter song name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          className="py-1 pl-1 rounded-md mt-1"
        />

        <label htmlFor="desc" className="mt-5">
          Enter song description
        </label>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="desc"
          type="text"
          name="desc"
          className="py-1 pl-1 rounded-md mt-1"
        />

        <label htmlFor="singers" className="mt-5">
          Enter singers name
        </label>
        <input
          id="singers"
          value={singers}
          onChange={(e) => setSingers(e.target.value)}
          type="text"
          name="singers"
          className="py-1 pl-1 rounded-md mt-1"
        />

        <select
          name="album"
          id="album"
          className="border-2 border-green-400 mt-5 rounded-md pl-2 py-1"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        >
          {albums.map((album) => (
            <option key={album._id} value={album._id}>
              {album.name}
            </option>
          ))}
        </select>

        {loading && (
          <div className="fixed inset-0 grid place-items-center bg-zinc-200/50 h-screen w-screen">
            <svg
              aria-hidden="true"
              className="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-green-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            {progress !== null && progress < 100 && (
              <progress
                max={100}
                value={progress}
                className="-mt-52"
              ></progress>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-700 hover:text-white transition-all py-2 px-8 mt-5 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddSong;
