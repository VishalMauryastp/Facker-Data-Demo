import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { FaRupeeSign, FaWhatsapp } from "react-icons/fa";

const HowWorks = () => {
  const steps = [
    {
      icon: <FaRupeeSign />,
      description: "Choose a plan and make a payment.",
    },
    {
      icon: <FaWhatsapp />,
      description: "We will add you to our WhatsApp community.",
    },
    {
      icon: <GrDocumentPdf />,
      description: "Done! Now you are all set to receive the PDF.",
    },
  ];

  return (
    <div className=" max-w-md  mx-auto px-4 sm:px-10 py-16  bg-blue-500/20 font-Poppins ">
      <h1 className="text-center font-bold text-3xl">How it Works?</h1>

      <h2 className="text-text-base font-bold font-Poppins text-center mt-8">
        We appreciate all the love and support from everyone! 😍 We're excited
        to announce that we've reached over 10,000 customers 🎉
      </h2>
      <div>
        {steps.map((val, i) => {
          return (
            <div className="flex mt-8 gap-3 items-center  " key={i}>
              <div className="p-5 rounded-full bg-white text-xl shadow text-blue-500">{val.icon}</div>
              <div>
                <h3 className="font-bold text-blue-500">Step {i+1}</h3>
                <p className="text-sm">{val.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWorks;
