import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const WhatInclude = () => {
  const marketData = [
    {
      step: "01",
      title: "Major Global Indices:",
      indices: [
        "GIFT Nifty",
        "Dow Jones",
        "Nasdaq",
        "S&P 500",
        "Hang Seng",
        "Nikkei 225",
        "KOSPI",
      ],
    },
    {
      step: "02",
      title: "Indian Indices:",
      indices: ["Sensex", "Nifty", "Bank Nifty", "India VIX"],
    },
    {
      step: "03",
      title: "Market Bulletin:",
      description:
        "Equip yourself with our carefully curated list of essential points that every investor needs to know before the market starts.",
    },
    {
      step: "04",
      title: "Technical Analysis:",
      description:
        "Gain a strategic edge with technical analysis of Nifty, Bank Nifty, and Call and Put option data, as well as FII and DII activity. These are sourced from multiple publications, helping you make informed investment decisions.",
    },
    {
      step: "05",
      title: "Stocks in News:",
      description:
        "We are sharing a list of stocks that are currently in the news, where you can anticipate market movements for today.",
    },
  ];

  return (
    <div className=" max-w-md  mx-auto  px-4 py-16 font-Poppins">
      <h1 className="text-3xl font-Poppins font-bold text-center">
        What does our PDF Include?
      </h1>
      <p className="mt-3 text-center">
        Our PDF consolidates news from publicly available sources, including
        various publications, and presents it in an easily readable format. This
        allows users to quickly gain information at a glance. It includes
        details such as…
      </p>

      <div>
        {marketData.map((val, i) => {
          return (
            <div className="mt-8">
              <h1 className="font-bold text-xl">
                {val.step} {val.title}
              </h1>
              <p className=" mt-3 text-base">{val.description}</p>
              <div className="mt-6">
                {val.step < 3 ? (
                  <ul>
                    {val?.indices.map((value, k) => {
                      return (
                        <div className="flex items-center gap-2 pl-2 text-[16px] font-medium first:mt-0 mt-2" key={k}>
                          <BsCheckCircleFill className="text-green-700 font-extrabold" />{" "}
                          <li>{value}</li>
                        </div>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatInclude;
