import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTourPlanning }) => {
  return (
    <section>
      <div className="title">
        <h2>our tour packages</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            {...tour}
            removeTourPlanning={removeTourPlanning}
          ></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
