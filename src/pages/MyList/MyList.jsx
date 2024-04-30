import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const allMyListData = useLoaderData();
  const { user, loading } = useContext(AuthContex);
  const [loadeduser, setLoadedUser] = useState(allMyListData);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  console.log(allMyListData);
  console.log(user.email);

  //const userEmail = user.email;

  const remaining = loadeduser.filter((stat) => stat.email === user.email);
  console.log(remaining);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //console.log(id);
        fetch(`http://localhost:5000/touristSpot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log("Deleted successfully");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Successful",
                showConfirmButton: false,
                timer: 1500,
              });

              //remove the users from the ui
              const remainingUsers = loadeduser.filter(
                (user) => user._id !== id
              );
              setLoadedUser(remainingUsers);
            }
          });
      }
    });
  };

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
      <Helmet>
        <title>My List || DiscoverWonder</title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold my-4">
        <Typewriter words={["My Added List"]} loop={true} />
      </h2>
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
                    {/* to={`/tourSpot/${_id}`} */}

                    <Link to={`/updateTourSpot/${singleSpot._id}`}>
                      <button className="px-3 py-2 font-semibold rounded-md bg-violet-600 text-gray-50 mb-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(singleSpot._id)}
                      className="px-3 py-2 font-semibold rounded-md bg-red-800 text-gray-50"
                    >
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
