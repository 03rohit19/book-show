import React from "react";

const ShowCards = ({ info }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg mt-4">
      <img
        className="rounded-lg"
        src={info?.show?.image?.medium || "not-available-image-url"}
        alt={info?.show?.name || "Not Available"}
      />
      <h2 className="font-serif font-bold py-2">
        {info?.show?.name || "Not Available"}
      </h2>
      <p>Genre: {info?.show?.genres?.join(", ") || "Not Available"}</p>
      <p>Rating: {info?.show?.rating?.average || "Not Available"}</p>
    </div>
  );
};

export default ShowCards;
