import { useLoaderData } from "react-router-dom";
import TourSpotCard from "../TourSpotCard/TourSpotCard";
import Banner from "../Banner/Banner";

const Home = () => {

  const allTourSpot = useLoaderData()

  return (
    <div>
      <div className="my-8 ">
      <Banner></Banner>
      </div>

      <div className="grid grid-cols-1 m-6 lg:m-2 lg:grid-cols-2 gap-8">
        {allTourSpot.map((TourSpot, index) => (
        <TourSpotCard key={index} TourSpot={TourSpot} />
      ))}
      </div>

    </div>
  );
};

export default Home;