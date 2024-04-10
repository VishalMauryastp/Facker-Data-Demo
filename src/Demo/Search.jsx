import React from "react";
// import './styles.css';
import { faker } from "@faker-js/faker";
import { data } from "./data";

function Search() {
  // Generate an array of 50 random shops
  const shops = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    shopName: faker.company.bs(),
    ownerName: faker.person.fullName(),
    category: faker.helpers.arrayElement([
      "Plumbing",
      "Restaurant",
      "Delivery",
      "Auto Services",
      "Home Services",
      "Dry Cleaning",
    ]),
    services: generateServices(),
    address: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    img: faker.image.business(640, 380, true),
    banner: faker.image.business(1200, 380, true),
    discription: faker.commerce.productDescription(),
  }));
  console.log(shops);

  function generateServices() {
    const category = faker.helpers.arrayElement([
      "Plumbing",
      "Restaurant",
      "Delivery",
      "Auto Services",
      "Home Services",
      "Dry Cleaning",
    ]);
    switch (category) {
      case "Plumbing":
        return ["Pipe Repair", "Drain Cleaning", "Fixture Installation"];
      case "Restaurant":
        return ["Dine-in", "Takeout", "Delivery"];
      case "Delivery":
        return ["Courier Service", "Food Delivery", "Package Delivery"];
      case "Auto Services":
        return ["Oil Change", "Tire Rotation", "Brake Inspection"];
      case "Home Services":
        return ["Cleaning", "Repairs", "Installation"];
      case "Dry Cleaning":
        return ["Dry Cleaning", "Laundry", "Alterations"];
      default:
        return [];
    }
  }

  return (
    <div id="Search">
      <h1 className="text-3xl font-Poppins pt-8 w-[90%] mx-auto">
        Random Shops
      </h1>
      <div className="shop-list w-[90%] mx-auto font-Poppins">
        {data.map((shop) => (
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
  );
}

export default Search;
