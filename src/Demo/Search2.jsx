import React, { useState } from "react";
import { data } from "./data"; // Assuming you have imported your data array

function Search2() {
  const [category, setCategory] = useState("");
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [services, setServices] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = () => {
    const filtered = data.filter((shop) => {
      return (
        (category === "" ||
          shop.category.toLowerCase().includes(category.toLowerCase())) &&
        (shopName === "" ||
          shop.shopName.toLowerCase().includes(shopName.toLowerCase())) &&
        (ownerName === "" ||
          shop.ownerName.toLowerCase().includes(ownerName.toLowerCase())) &&
        (services === "" ||
          shop.services.some((service) =>
            service.toLowerCase().includes(services.toLowerCase())
          )) &&
        (city === "" || shop.city.toLowerCase().includes(city.toLowerCase())) &&
        (state === "" ||
          shop.state.toLowerCase().includes(state.toLowerCase())) &&
        (address === "" ||
          shop.address.toLowerCase().includes(address.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div id="Search2">
      <h1>Filter Shops</h1>
      <div>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
       
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      {/* <div className="shop-list">
        {filteredData.map((shop) => (
          <div key={shop.id} className="shop-card">
            <h2>{shop.shopName}</h2>
            <p>Owner: {shop.ownerName}</p>
            <p>Category: {shop.category}</p>
            <p>Services: {shop.services.join(", ")}</p>
            <p>
              Address: {shop.address}, {shop.city}, {shop.state}
            </p>
            <p>Phone: {shop.phone}</p>
            <p>Email: {shop.email}</p>
            <p>
              Website:{" "}
              <a href={shop.website} target="_blank" rel="noopener noreferrer">
                {shop.website}
              </a>
            </p>
          </div>
        ))}
      </div> */}

      <div id="Search">
        <h1 className="text-3xl font-Poppins pt-8 w-[90%] mx-auto">
          Random Shops
        </h1>
        <div className="shop-list w-[90%] mx-auto font-Poppins">
          {filteredData.map((shop) => (
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

export default Search2;
