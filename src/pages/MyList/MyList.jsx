import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Providers/AuthProvider";

const MyList = () => {
  const allMyListData = useLoaderData();
  const { user, loading } = useContext(AuthContex);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  console.log(allMyListData);
  console.log(user.email);

  //const userEmail = user.email;

  const remaining = allMyListData.filter((stat) => stat.email === user.email);
  console.log(remaining);

  // const {
  //   name,
  //   countryNames,
  //   location,
  //   averageCost,
  //   seasonality,
  //   travelTime,
  //   totaVisitorsPerYear,
  //   email,
  //   photo,
  //   description,
  //   _id,
  // } = remaining;

  return (
    <div>
      <h2 className="text-2xl text-center font-bold my-4">My Added List</h2>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />

              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Spot Name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Country</th>
                <th className="p-3">Cost</th>
                <th className="pl-7">Action</th>
              </tr>
            </thead>
            <tbody>
              {remaining.map((singleSpot) => (
                <tr
                  key={singleSpot._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{singleSpot.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{singleSpot.location}</p>
                  </td>
                  <td className="p-3">
                    <p>{singleSpot.countryNames}</p>
                    
                  </td>
                  <td className="p-3">
                    <p>{singleSpot.totaVisitorsPerYear}</p>
                    
                  </td>

                  <td className="p-3 mr-6 text-right">
                    <button className="px-3 py-2 font-semibold rounded-md bg-violet-600 text-gray-50 mb-2">
                      Update
                    </button>
                    <button className="px-3 py-2 font-semibold rounded-md bg-red-800 text-gray-50">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
