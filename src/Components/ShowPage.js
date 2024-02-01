import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ShowPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetchShowDetails();
  }, [id]);

  const fetchShowDetails = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShowDetails(data);
    } catch (error) {
      console.error("Error fetching show details:", error);
    }
  };

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {showDetails.image && (
        <img
          src={showDetails.image.medium}
          alt={showDetails.name}
          className="w-[300px] h-auto ml-[500px]  rounded-lg"
        />
      )}
      <div className="ml-[300px] w-[800px] mt-4 ">
        <p>{showDetails?.summary}</p>
      </div>
      <div className="flex">
        <Link
          to="/"
          className="mx-2 ml-[500px] mt-4 border border-black rounded-md px-3 hover:bg-green-200 focus:outline-none focus:border-blue-500"
        >
          Back
        </Link>
        <button
          onClick={handleBookTicket}
          className="mx-2 mt-4 border border-black rounded-md px-3 hover:bg-green-200 focus:outline-none focus:border-blue-500"
        >
          Book Ticket
        </button>
      </div>
      {showBookingForm && (
        <BookingForm showDetails={showDetails} onClose={closeBookingForm} />
      )}
    </div>
  );
};

const BookingForm = ({ showDetails, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="booking-form p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="movie" className="block mb-2 font-bold">
            Movie:
          </label>
          <input
            type="text"
            id="movie"
            name="movie"
            value={showDetails.name}
            className="border rounded-md px-3 py-2 w-full"
            readOnly
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mr-2"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShowPage;
