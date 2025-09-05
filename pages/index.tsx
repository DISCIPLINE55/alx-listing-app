import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A cozy apartment in the city center."
          imageUrl="/assets/placeholder1.jpg"
        />
        <Card
          title="Beach House"
          description="Relax at this beautiful beach house."
          imageUrl="/assets/placeholder2.jpg"
        />
        <Card
          title="Mountain Cabin"
          description="Enjoy peace in a mountain cabin."
          imageUrl="/assets/placeholder3.jpg"
        />
      </div>

      <div className="mt-6">
        <Button label="Book Now" onClick={() => alert("Booking clicked!")} />
      </div>
    </div>
  );
};

export default Home;
