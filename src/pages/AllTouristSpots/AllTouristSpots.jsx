import { useLoaderData } from "react-router-dom";
import AllTourSpotCard from "./AllTourSpotCard";
import { Helmet } from "react-helmet-async";

const AllTouristSpots = () => {
  const allTourSpot = useLoaderData();

  return (
    <>
      <Helmet>
        <title>AllTouristSpots || DiscoverWonder</title>
      </Helmet>
      <div className="grid grid-cols-1 m-6 gap-8">
        {allTourSpot.map((TourSpot, index) => (
          <AllTourSpotCard key={index} TourSpot={TourSpot} />
        ))}
      </div>
    </>
  );
};

export default AllTouristSpots;
