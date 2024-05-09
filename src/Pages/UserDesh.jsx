/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {
  const [data, setData] = useState({});
  const [mapLoopStart, setMapLoopStart] = useState(5);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const data = await firebase.getUserData();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const userData = await getUserData();
      const userDataObject = { ...userData[0] };
      return userDataObject;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // find username and branch to pass in getUserMOnthlydata

  useEffect(() => {
    if (firebase.isLoggedIn === false) {
      navigate("/login");
    }

    const fetchDataAndUpdateData = async () => {
      try {
        const userDetail = await fetchData();
        const userData = await firebase.getUserMonthlyData(
          userDetail.username,
          userDetail.branch
        );
        setData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchDataAndUpdateData(); // Call the async function
  }, [mapLoopStart]);

  const filterDataFunction = () => {
    const filterData = Object.entries(data);

    const againFilterData = filterData.map((value) => {
      return value[1];
    });

    return againFilterData;
  };

  const usersDataEntry = filterDataFunction().reverse();
  let sr = 1;

  const handleList = () => {
    let newvalue = mapLoopStart + 4;
    setMapLoopStart(newvalue);
    console.log(mapLoopStart);
  };

  return (
    <>
      <div className="flex justify-center bg-gray-300">
        <div className="flex flex-col w-full min-h-screen max-w-screen-lg px-4">
          <div className="flex flex-col w-full p-2 ">
            <div className="mt-32  text-center mb-20 w-full">
              {" "}
              <h1 className="text-5xl  font-thin underline underline-offset-8 text-gray-800">
                User Dashboard
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="overflow-x-auto shadow-md rounded-lg bg-black">
                <h3 className="text-xl font-bold text-gray-100 mb-2 text-center mt-3">
                  Monthly Report
                </h3>
                {/* Table for Monthly Report */}

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs  uppercase  bg-gray-700 text-gray-300">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked
                            readOnly
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Sr
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {usersDataEntry.map((value, key) => {
                      if (mapLoopStart < key) {
                        return;
                      }
                      return (
                        <tr
                          key={key}
                          className="bg-gray-400 border-b  hover:bg-gray-50 "
                        >
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked
                                readOnly
                              />
                              <label
                                htmlFor="checkbox-table-search-1"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th scope="col" className="px-6 py-3 text-gray-900">
                            {sr++}
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {value.दिनांक}
                          </th>

                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-900  hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <button
                  className="text-blue-500 flex w-full justify-center"
                  onClick={handleList}
                >
                  <svg
                    className="w-3.5 h-3.5 ms-2 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
              <div className="overflow-x-auto shadow-md rounded-lg bg-black  ">
                <h3 className="text-xl font-bold text-white mb-2 text-center mt-3">
                  Weekly Report
                </h3>
                {/* Table for Weekly Report */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs  uppercase  bg-gray-700 text-gray-300">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            readOnly
                            checked
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-400 border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked
                            readOnly
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        29/10/2024
                      </th>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium  text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-400 border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked
                            readOnly
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        29/10/2024
                      </th>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium  text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-400 border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gratext-gray-200 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked
                            readOnly
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        29/10/2024
                      </th>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium  text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
