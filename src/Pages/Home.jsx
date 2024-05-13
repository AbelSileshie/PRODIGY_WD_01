import React from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import TrendingCard from "../components/TrendingCard";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <TrendingCard />
    </div>
  );
};

export default Home;
