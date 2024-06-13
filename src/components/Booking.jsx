import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2 py-2">
            <label>Destination </label>
            <select className="lg:w-[300px] md:w-full border rounded-md p-2 cursor-pointer ">
              <option>Grand Antigue</option>
              <option>Goa</option>
              <option>Maldives</option>
              <option>key west</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availability</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
