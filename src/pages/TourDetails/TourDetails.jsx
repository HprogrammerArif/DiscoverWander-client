import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
  const TourDetail = useLoaderData();
  //console.log(TourDetail);

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
  } = TourDetail;

  return (
    <div>
      <section className="bg-gray-800 rounded-lg m-4 lg:m-0 text-gray-100">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-2/4 rounded-xl"
            
          >
            <img src={photo} className="bg-cover h-full py-4 bg-center object-cover object-center" alt="" />
          </div>

          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className=" h-8 mb-6 font-semibold text-xl text-violet-400"><b className="text-gray-100">Country :</b> {countryNames}</h2>
           
            <h2 className="text-3xl mb-3 leading-none">
            <b className="text-gray-100">Spot Name:</b> {name}
            </h2>
            <h2 className="text-lg font-semibold leading-none">
            <b>Location:</b>
              {location}
            </h2>
            <p className="mt-8 mb-8 text-sm">
             {description}
            </p>
            <div className="flex justify-between">
            <p className="self-start pt-3 text-lg font-medium rounded-3xl text-violet-600">
            <b className="text-gray-100">Seasonality:</b>  #{seasonality}
            </p>
            <p className="self-start pt-3 text-lg font-medium rounded-3xl text-violet-600">
            <b className="text-gray-100">Duration:</b> {travelTime} 
            </p>
            </div>
            <div className="flex justify-between">
            <p className="self-start py-3 text-lg font-medium rounded-3xl text-violet-600">
            <b className="text-gray-100">Average Cost :</b> {averageCost} Doller
            </p>
            <p className="self-start pt-3 text-lg font-medium rounded-3xl text-violet-600">
            <b className="text-gray-100">Total Visitor:</b> {totaVisitorsPerYear} 
            </p>
            </div>
            <button className="self-start px-10 mt-6 py-3 text-lg font-medium rounded-3xl bg-violet-600 text-gray-50">Go For Book</button>
		
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;
