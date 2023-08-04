import React from "react";

const Input = ({ label, type, name }) => {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        className="block  rounded-md px-6 pt-6 pb-1 w-full text-xl text-black bg-[#eef1f6] appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label className="absolute text-lg text-gray-900 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        {label}
      </label>
    </div>
  );
};

export default Input;
