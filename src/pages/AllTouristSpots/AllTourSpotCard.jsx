import { Link } from "react-router-dom";

const AllTourSpotCard = ({ TourSpot }) => {

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
    <div className="dark:bg-gray-100 dark:text-gray-900 mt-6">
      <div className="container grid  grid-cols-12 mx-auto dark:bg-gray-50">
        <div
          className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-6"
          // style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"
          
        ><img className="rounded-2xl h-[370px] p-4 w-full" src={photo} alt="" /></div>
        <div className="flex flex-col pr-8 py-4 col-span-full row-span-full lg:col-span-6">
          <div className="flex justify-start">
            
          </div>
          <h1 className="text-3xl font-semibold ">{name}</h1>
          <p className=" flex-1 py-4">
          <span className="font-bold ">Office Descriotion:</span>{` ${description}`}
          </p>

          <div className="flex items-center justify-between mb-4 ">
          <p className="flex-1 ">
          <span className="font-bold">Location:</span>{` ${location}`}
          </p>
          <p className="flex-1 ">
          <span className="font-bold">Travel Duration:</span>{` ${travelTime}`}
          </p>
          </div>

          
          <p className="flex-1 ">
          <span className="font-bold">price:</span>{` ${averageCost}`}
          </p>
          <p className="flex-1 ">
          <span className="font-bold">Seasonality:</span>{` ${seasonality}`}
          </p>
          
          
          {/* <p className="flex-1 pt-3 flex">
          <span className="font-bold mr-4">facilities:</span>{
            facilities.map((item, id) => <p key={id} className="font-bold mr-2">{`#${item}`}</p> )
          }
          </p> */}

          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 dark:text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="self-center text-md">by Leroy Jenkins</span>
            </div>
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

export default AllTourSpotCard;