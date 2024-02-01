// BookingPage.jsx
import React from "react";

const BookingPage = (props) => {
  const { showDetails } = props.location.state;

  return (
    <div className="">
      <h2>Booking Page</h2>
      <p>Movie Name: {showDetails.name}</p>
    </div>
  );
};

export default BookingPage;
