import React from "react";
import { data } from "../Demo/data";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  // let { id } = useParams();
  const shopId = useParams().id;
  // const details = data?.find((shop) => shop.id === shopId);
  const details = data?.filter((val) => val.id == shopId);

  console.log(details);

  return (
    <div className="shop-list  mx-auto font-Poppins pb-24">
      {details.map((shop) => (
        <>
          <div className="max-h-[300px]">
            <img
              className="w-full h-full object-contain"
              src={shop.img2}
              alt=""
            />
          </div>
          <div className="w-[90%] mx-auto mt-[-100px] relative">
            <div
              key={shop.id}
              className="shop-card  cursor-pointer flex  max-lg:flex-col mt-8 lg:gap-8  text-white  bg-blue-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={() => {
                navigate(`/details/${shop.id}`);
              }}
            >
              {/* <img src={shop.img} alt="" /> */}

              <div className="max-lg:p-4 lg:p-8 ">
                <h2 className="text-2xl lg:text-4xl uppercase">
                  {shop.shopName}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-8">
                  <p className="mt-4 text-sm">
                    <span className="text-base lg:text-xl"> Owner : </span>
                    {shop.ownerName}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl">
                      {" "}
                      Company Category :{" "}
                    </span>{" "}
                    {shop.category}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl"> Services :</span>{" "}
                    {shop.services.join(", ")}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl"> Address :</span>{" "}
                    {shop.address}, {shop.city}, {shop.state}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl"> Phone :</span>{" "}
                    {shop.phone}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl"> Email :</span>{" "}
                    {shop.email}
                  </p>
                  <p className="text-sm">
                    <span className="text-base lg:text-xl">Website : </span>
                    <a
                      href={shop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {shop.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Details;
