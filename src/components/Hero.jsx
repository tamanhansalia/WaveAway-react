import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] mb-10">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className=" absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your Trip</h1>
          <h2 className="text-4xl py-4 italic">with weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maxime
            culpa totam esse cumque hic ea veritatis quibusdam sit velit ullam,
            possimus facere. Molestiae odit nam doloremque commodi labore hic?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
