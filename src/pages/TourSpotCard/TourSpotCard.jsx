import { Link } from "react-router-dom";
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TourSpotCard = ({ TourSpot }) => {
  //console.log(TourSpot);

  const {
    name,
    countryNames,
    location,
    averageCost,
    seasonality,
    travelTime,
    totaVisitorsPerYear,
    email,
    photo,
    description,
    _id,
  } = TourSpot;

  return (
    <div>
      <div className="card card-compact  h-[450px] bg-base-100 shadow-xl ">
        <figure>
          <img
            className=" object-cover p-4  w-full animate__animated animate__pulse"
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title animate__animated animate__bounce animate__delay-1s">
            {location}
          </h2>
          <Fade delay={400} direction="down" triggerOnce>
          <p>{description}</p>
      </Fade>
          <div className="card-actions">
            <Link to={`/tourSpot/${_id}`}>
              <button className="btn bg-violet-500 animate__animated animate__pulse animate__delay-2s">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSpotCard;
