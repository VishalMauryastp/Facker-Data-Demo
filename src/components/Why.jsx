import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Why = () => {
  const morningPdfBenefits = [
    "Stay Updated ⚡",
    "Save Time ⌛",
    "Understand Better 🧐",
    "Be Ready 🚀",
    "Easy Access 📱",
    "Boost Confidence 😎",
    "Smarter Decisions 🧠",
    "Convenient",
    "Value for Money 💰",
    "New Updates, Absolutely ❤️ FREE",
  ];

  return (
    <div className=" max-w-md  mx-auto px-4 sm:px-10 py-16  bg-blue-500 rounded-2xl text-white font-Poppins ">
      <div>
        <h1 className="text-3xl font-Poppins font-bold text-center">
          User Why is Our Morning PDF a Must for You?
        </h1>

        <ul className="px-4 pt-8">
          {morningPdfBenefits.map((val, i) => {
            return (
              <div
                className="flex items-center gap-2 pl-2 text-[16px] font-medium first:mt-0 mt-2"
                key={i}
              >
                <BsCheckCircleFill className="text-white font-extrabold" />{" "}
                <li>{val}</li>
              </div>
            );
           
          })}
        </ul>
      </div>
    </div>
  );
};

export default Why;
