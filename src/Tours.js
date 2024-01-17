import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {/* The following get's rendered and displayed on screen */}
      <div className="title">
        <h2>Welcome to the Tours App!</h2>
        <h3>Here are the tours we offer:</h3>
        <div className="underline"></div>
      </div>
      <div>
        {/* Setting up the Tour component to have all properties from the API
        Using spread operator to access all the properties in the API object*/}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
