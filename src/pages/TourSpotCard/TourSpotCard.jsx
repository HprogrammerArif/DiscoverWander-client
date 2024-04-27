import { Link } from "react-router-dom";

const TourSpotCard = ({TourSpot}) => {
  console.log(TourSpot);

  const {name,
    countryNames,
    location,
    averageCost,
    seasonality,
    travelTime,
    totaVisitorsPerYear,
    email,
    photo,
    description,} = TourSpot;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure>
          <img className="max-h-[380px] w-full animate__animated animate__pulse"
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title animate__animated animate__bounce animate__delay-1s">{location}</h2>
          <p>{description}</p>
          <div className="card-actions">
          {/* to={`/details/${id}`} */}
            <Link>
            <button className="btn bg-violet-500 animate__animated animate__pulse animate__delay-2s">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSpotCard;