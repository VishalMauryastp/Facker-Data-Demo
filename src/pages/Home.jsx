import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../components/Hero";
import Thanks from "../components/Thanks";
import HowWorks from "../components/HowWorks";
import WhatInclude from "../components/WhatInclude";
import Why from "../components/Why";
import Search from "../Demo/Search";
import Search2 from "../Demo/Search2";
import Search3 from "../Demo/Search3";

const Home = () => {
  return (
    <Layout>
      {/* <Search2 /> */}
      <Search3 />

      {/* <Search /> */}
      {/* <section>
        <Hero />
        <Thanks />
        <HowWorks />
        <WhatInclude />
        <Why />
      </section> */}
    </Layout>
  );
};

export default Home;
