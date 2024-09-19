"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CardsGenerator = () => {
  ///////////////////npm install react-hook-form
  const { register, handleSubmit, watch, reset } = useForm();
  const [usersCards, setUsersCards] = useState([]);

  const onSubmit = handleSubmit((data) => {
    setUsersCards((prevData) => {
      const result = [...prevData, data];
      // localStorage.setItem("payDirection", JSON.stringify(result)); ////localStorage
      reset();
      return result;
    });
    console.log(data);
  });

console.log(usersCards);

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex justify-center w-full sm:w-auto">
        <input
          type="text"
          placeholder="placce holder"
          {...register("name")}
          className="bg-gray-200 text-gray-700 text-center p-2 rounded-md outline-none focus:ring focus:ring-gray-300 w-56 sm:w-auto"
        />
      </div>
      <button
        type="submit"
        className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-black shadow-md hover:bg-[#32363A]  hover:scale-105  hover:shadow-lg  transition-all duration-300 "
      >
        {" "}
        Enviar
      </button>
    </form>
  );
};

export default CardsGenerator;
