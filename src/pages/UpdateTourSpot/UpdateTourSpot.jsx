import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const UpdateTourSpot = () => {
  const updateDetails = useLoaderData();

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
  } = updateDetails;

  const handleUpdateTourSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.names.value;
    const countryNames = form.countryNames.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const updatedTourSpot = {
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
    };
    console.log(updatedTourSpot);

    //send data to backend or server

    fetch(`http://localhost:5000/touristSpot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTourSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Tourist Spot updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <section className="p-10 bg-gray-800 text-gray-50">
        <form
          onSubmit={handleUpdateTourSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 w-[70%] mx-auto rounded-md shadow-sm bg-gray-900">
            <h2 className="text-3xl col-span-4 text-center font-bold">
            <Typewriter 
              words={ ['Update Tourists Spot']}
              loop={true}
              />
            </h2>
           
            <p className="text-center col-span-4 px-4">
              You can add any sort of Tourists spot you like. Make sure you are
              providing real info.
            </p>

            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  TourSpot Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="names"
                  defaultValue={name}
                  required
                  placeholder="Enter TourSpot name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  Country Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  name="countryNames"
                  defaultValue={countryNames}
                  placeholder="Enter country name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  Location
                </label>
                <input
                  id="name"
                  type="text"
                  name="location"
                  required
                  defaultValue={location}
                  placeholder="Enter your location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  Average Cost
                </label>
                <input
                  id="cost"
                  type="number"
                  required
                  name="averageCost"
                  defaultValue={averageCost}
                  placeholder="Enter Average Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  Seasonality
                </label>
                <input
                  id="seasonality"
                  type="text"
                  required
                  name="seasonality"
                  defaultValue={seasonality}
                  placeholder="winter/summer"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  Travel Time
                </label>
                <input
                  id="travel_time"
                  type="text"
                  name="travelTime"
                  required
                  defaultValue={travelTime}
                  placeholder="15 days"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  Tota Visitors PerYear
                </label>
                <input
                  id="totaVisitorsPerYear"
                  type="text"
                  required
                  name="totaVisitorsPerYear"
                  defaultValue={totaVisitorsPerYear}
                  placeholder="Enter totaVisitorsPerYear"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  name="email"
                  required
                  defaultValue={email}
                  placeholder="Enter User Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <label htmlFor="website" className="text-sm">
                  Photo/Image
                </label>
                <input
                  id="image"
                  type="url"
                  name="photo"
                  required
                  defaultValue={photo}
                  placeholder="Enter photo url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Short Description
                </label>
                <textarea
                  id="bio"
                  placeholder="Description"
                  name="description"
                  required
                  defaultValue={description}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <input
                  id="Add"
                  type="submit"
                  name="button"
                  value="Update"
                  className="w-full cursor-pointer py-2 border mt-4 rounded-md focus:ring focus:ring-opacity-75 text-[#331A15] bg-[#D2B48C] font-bold border-gray-700"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateTourSpot;
