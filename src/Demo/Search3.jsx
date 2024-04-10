import React, { useState } from "react";
import { data } from "./data"; // Assuming you have imported your data array
import { BsSearch } from "react-icons/bs";

function Search3() {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [Data, setData] = useState([]);

  const handleSearch = () => {
    const filtered = data.filter((shop) => {
      const shopText = `${shop.category} ${shop.shopName} ${
        shop.ownerName
      } ${shop.services.join(" ")}`;
      return (
        shopText.toLowerCase().includes(searchText.toLowerCase()) &&
        (shop.city.toLowerCase().includes(location.toLowerCase()) ||
          shop.state.toLowerCase().includes(location.toLowerCase()) ||
          shop.address.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setData(filtered); // Update the Data state variable with filtered data
  };

  return (
    <div id="Search" className="">
      <div className="w-[90%] mx-auto py-20">
        <h1 className="text-3xl font-Poppins font-bold text-center">
          Filter Shops
        </h1>

        <div className="lg:w-[50%] mx-auto flex max-md:flex-col  md:items-center gap-2 mt-4 ">
          <div className="lg:w-[90%] flex max-md:flex-col gap-2">
            <input
              className="w-full md:w-[50%] px-2 py-2 border-2 rounded-lg"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
            />
            <input
              className="md:w-[50%] px-2 py-2 border-2 rounded-lg"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="w-full md:w-[10%]">
            <button
              type="button" // Change type to "button"
              className="w-full  px-3 flex gap-4 justify-center text-white py-2 bg-green-700 rounded"
              onClick={handleSearch}
            >
              <BsSearch className="text-2xl" />
              <p className="md:hidden">Search</p>
            </button>
          </div>
        </div>
      </div>

      <div id="Search">
        <h1 className="text-3xl font-Poppins pt-8 w-[90%] mx-auto">
          Random Shops
        </h1>
        <div className="shop-list w-[90%] mx-auto font-Poppins pb-24">
          {Data.map((shop) => (
            <div
              key={shop.id}
              className="shop-card  flex  max-lg:flex-col mt-8 lg:gap-8  text-white  bg-blue-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="max-h-[500px] lg:w-[50%]">
                <img
                  className="w-full h-full object-contain"
                  src={shop.img}
                  alt=""
                />
              </div>
              <div className="max-lg:p-4 lg:py-8 lg:w-[50%]">
                <h2 className="text-2xl lg:text-4xl uppercase">
                  {shop.shopName}
                </h2>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search3;
