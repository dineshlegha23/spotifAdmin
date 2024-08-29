import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const AddSong = () => {
  return (
    <section className="">
      <form>
        <div className="bg-green-200 text-2xl">
          <input type="file" name="image" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <CiSquarePlus />
          </label>
        </div>
      </form>
    </section>
  );
};

export default AddSong;
