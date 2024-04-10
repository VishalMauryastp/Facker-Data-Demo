import React from "react";

const Hero = () => {
  return (
    <div className="relative max-w-md  mx-auto  ">
      <div className="px-4 sm:px-10">
        <div className=" pt-16 mx-auto text-center relative z-10">
          {/* max-w-4xl */}
          <h1 className=" text-3xl font-bold mb-6  font-Poppins">
            🔥 Starting tomorrow, receive your Morning Report via WhatsApp!
          </h1>
          <p className="text-base font-Poppins">
            Embark on a gastronomic journey with our curated dishes, delivered
            promptly to your doorstep. Elevate your dining experience today.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10">
            <button className="px-6 py-3 rounded-xl text-white bg-blue-500 transition-all hover:bg-blue-400">
              Add your PDF here.
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-center font-Poppins mt-10">
            🚨 Note: You can also check our latest PDF report on WhatsApp.
          </h1>
        </div>
        <hr className="my-12 border-gray-300" />
        <div className="grid grid-cols-2  gap-4 items-center">
          <img
            src="https://readymadeui.com/google-logo.svg"
            className="w-28 mx-auto"
            alt="google-logo"
          />
          <img
            src="https://readymadeui.com/facebook-logo.svg"
            className="w-28 mx-auto"
            alt="facebook-logo"
          />
          <img
            src="https://readymadeui.com/linkedin-logo.svg"
            className="w-28 mx-auto"
            alt="linkedin-logo"
          />
          <img
            src="https://readymadeui.com/pinterest-logo.svg"
            className="w-28 mx-auto"
            alt="pinterest-logo"
          />
        </div>
      </div>
      <img
        src="https://readymadeui.com/bg-effect.svg"
        className="absolute inset-0  w-full h-full"
      />
    </div>
  );
};

export default Hero;
