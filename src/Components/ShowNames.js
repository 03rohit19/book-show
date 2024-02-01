import React, { useEffect, useState } from "react";
import ShowCards from "./ShowCards";
import { Link } from "react-router-dom";

const ShowNames = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShowDetails();
  }, []);

  const getShowDetails = async () => {
    try {
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await data.json();
      console.log(json);
      setShows(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {shows.map((show) => (
        <div key={show.show.id} className="show-card">
          <Link to={"/show/" + show.show.id}>
            <ShowCards info={show} />
          </Link>
          <Link to={"/show/" + show.show.id}>
            <button className="mx-2 border border-gray-300 rounded-md px-3 hover:bg-green-200 focus:outline-none focus:border-blue-500">
              Open
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowNames;
