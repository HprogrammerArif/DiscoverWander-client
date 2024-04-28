import { useLoaderData } from "react-router-dom";
import AllTourSpotCard from "./AllTourSpotCard";

const AllTouristSpots = () => {

  const allTourSpot = useLoaderData()

  return (
    <div className="grid grid-cols-1 m-6 gap-8">
        {allTourSpot.map((TourSpot, index) => (
        <AllTourSpotCard key={index} TourSpot={TourSpot} />
      ))}
      </div>
  );
};

export default AllTouristSpots;