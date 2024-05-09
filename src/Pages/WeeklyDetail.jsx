/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const WeeklyDetail = () => {
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
  useEffect(() => {
    if (firebase.isLoggedIn === false) {
      navigate("/login");
    }
    fetchData()
      .then((data) => {
        setDate(dateHandler());
        setBranchName(data.branch);
        setZoneName(data.zoneName);
        setZoneNumber(data.zoneNumber);
        setuserName(data.username);
      })
      .catch((e) => console.log(e));
  });
  const [entryDate, setDate] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ZoneNme, setZoneName] = useState("");
  const [ZoneNumber, setZoneNumber] = useState(0);
  const [username, setuserName] = useState(0);
  const [data, setData] = useState({
    dateSatsang: "",
    timeOfSatsang: "",
    nameOfSatsang: "",
    stegeSeva: "",
    stejSanchalanSeva: "",
    address: "",
    bahanNumber: "",
    bhaiNUmber: "",
    totalNumber: "",
    namskar: "",
  });

  const dateHandler = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Month starts from 0, so we add 1
    const year = today.getFullYear();
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  };

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !entryDate ||
      !branchName ||
      !ZoneNme ||
      !ZoneNumber ||
      !data.dateSatsang ||
      !data.timeOfSatsang ||
      !data.nameOfSatsang ||
      !data.stegeSeva ||
      !data.stejSanchalanSeva ||
      !data.address ||
      !data.bahanNumber ||
      !data.bhaiNUmber ||
      !data.totalNumber ||
      !data.namskar
    ) {
      alert("any detail not filler");
      return;
    }
    console.log(data, entryDate, branchName, ZoneNme, ZoneNumber);
    await firebase.handleWeeklyEntrie(
      entryDate,
      data.dateSatsang,
      ZoneNme,
      ZoneNumber,
      branchName,
      data.nameOfSatsang,
      data.address,
      data.timeOfSatsang,
      data.stegeSeva,
      data.stejSanchalanSeva,
      data.bhaiNUmber,
      data.bahanNumber,
      data.totalNumber,
      data.namskar,
      username
    );
    alert("Successfully Subimit....");
    handleClearAll();
  };

  const handleClearAll = () => {
    setData((prevState) => {
      const clearedValues = {};
      Object.keys(prevState).forEach((key) => {
        clearedValues[key] = "";
      });
      return clearedValues;
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-300 relative flex flex-col items-center ">
        <div className="w-4/5 mt-40 flex flex-col shadow-md items-center justify-start bg-gray-100 border rounded-lg">
          <div className=" flex flex-col w-full  text-white  shadow-md items-center"></div>
          <div className="w-full mt-10 flex justify-between shadow-sm bg-gray-900 border rounded-md h-14 items-center">
            <p className="text-gray-200 text-lg font-sans text-center text-transform: uppercase ml-2 ">
              zone no :{" "}
              {<span className=" font-bold text-gray-200">{ZoneNumber}</span>}{" "}
            </p>
            <p className="text-gray-200 text-lg font-sans text-center text-transform: uppercase mr-2 ">
              zone :{" "}
              {<span className=" font-bold text-gray-200">{ZoneNme}</span>}
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit} action="">
            <div className="w-full border-2 border-gray-600 p-5 flex flex-col items-center rounded-lg mt-1 ">
              <div className="w-full">
                <p className="text-gray-900 underline underline-offset-8 text-3xl font-sans text-center text-transform: uppercase  ">
                  ब्रांच सत्संग संबंधित विवरण हेतु -
                </p>
                <hr className="w-full h-[1px] my-8 bg-gray-900 border-0"></hr>
              </div>

              <div className="flex flex-col bg-gray-400 p-10 rounded-md border shadow-sm w-full md:w-3/4 md:flex-row md:justify-between md:space-x-4">
                <div className="mt-4 md:mt-0 ">
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Entry Date
                  </label>
                  <input
                    name="entryDate"
                    type="text"
                    id="userName"
                    aria-label="disabled input 2"
                    className="bg-gray-300 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={entryDate}
                    disabled
                    readOnly
                    required
                  />
                </div>
                <div className="mt-4 md:mt-0">
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Branch Name
                  </label>
                  <input
                    name="branchName"
                    type="text"
                    id="userName"
                    aria-label="disabled input 2"
                    className="bg-gray-300 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={branchName}
                    disabled
                    readOnly
                    required
                  />
                </div>
              </div>
              <hr className="w-full h-[1px] my-8 bg-gray-600 border-0"></hr>
              <div className="flex flex-col items-center  md:justify-between w-4/5  flex-wrap md:flex-row p-10 bg-gray-400 shadow-sm border rounded-md ">
                <div className="md:w-1/4 w-full mt-3   ">
                  <label
                    htmlFor="dateSatsang"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    सत्संग की तिथि
                  </label>
                  <input
                    type="date"
                    id="dateSatsang"
                    name="dateSatsang"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    onChange={handleInput}
                    value={data.dateSatsang}
                  />
                </div>
                <div className="md:w-1/4 w-full mt-3  ">
                  <label
                    htmlFor="timeOfSatsang"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    सत्संग का समय
                  </label>
                  <input
                    type="time"
                    id="timeOfSatsang"
                    name="timeOfSatsang"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="10:24 pm"
                    pattern="[0-9]{2}:[0-9]{2}"
                    onChange={handleInput}
                    value={data.timeOfSatsang}
                    required
                  />
                </div>
                <div className="md:w-1/4 w-full mt-3   ">
                  <label
                    htmlFor="nameOfSatsang"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    सत्संग का नाम:
                  </label>
                  <input
                    type="text"
                    id="nameOfSatsang"
                    name="nameOfSatsang"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="साप्ताहित/खुला/अन्य"
                    onChange={handleInput}
                    value={data.nameOfSatsang}
                    required
                  />
                </div>
              </div>
              <hr className="w-full h-[1px] my-8 bg-gray-600 border-0"></hr>
              <div className="flex flex-col items-center  md:justify-between w-4/5  flex-wrap md:flex-row  p-10 bg-gray-400 shadow-sm border rounded-md">
                <div className="w-full md:w-1/3  flex  flex-col">
                  <div className=" w-full mt-3   ">
                    <label
                      htmlFor="stegeSeva"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      स्टेज सेवा:
                    </label>
                    <input
                      type="text"
                      id="stegeSeva"
                      name="stegeSeva"
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      onChange={handleInput}
                      value={data.stegeSeva}
                    />
                  </div>
                  <div className=" w-full mt-3   ">
                    <label
                      htmlFor="stejSanchalanSeva"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      स्टेज संचालन सेवा:
                    </label>
                    <input
                      type="text"
                      id="stejSanchalanSeva"
                      name="stejSanchalanSeva"
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      onChange={handleInput}
                      value={data.stejSanchalanSeva}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full mt-3 ">
                  {" "}
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    सत्संग का स्थान:
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="सत्संग का स्थान - "
                    required
                    onChange={handleInput}
                    value={data.address}
                  ></textarea>
                </div>
              </div>
              <hr className="w-full h-[1px] my-8 bg-gray-600 border-0"></hr>
              <div className="flex flex-col items-center  md:justify-between w-4/5  flex-wrap md:flex-row p-10 bg-gray-400 shadow-sm border rounded-md ">
                <div className="md:w-1/5 w-full mt-3   ">
                  <label
                    htmlFor="bahanNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    बहनों की संख्या
                  </label>
                  <input
                    type="number"
                    id="bahanNumber"
                    name="bahanNumber"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInput}
                    value={data.bahanNumber}
                    placeholder=""
                    required
                  />
                </div>
                <div className="md:w-1/5 w-full mt-3  ">
                  <label
                    htmlFor="bhaiNUmber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    भाइयो की संख्या
                  </label>
                  <input
                    type="number"
                    id="bhaiNUmber"
                    name="bhaiNUmber"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    onChange={handleInput}
                    value={data.bhaiNUmber}
                  />
                </div>
                <div className="md:w-1/5 w-full mt-3   ">
                  <label
                    htmlFor="totalNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    कुल संख्या
                  </label>
                  <input
                    type="number"
                    id="totalNumber"
                    name="totalNumber"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    onChange={handleInput}
                    value={data.totalNumber}
                    required
                  />
                </div>
                <div className="md:w-1/5 w-full mt-3   ">
                  <label
                    htmlFor="namskar"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    नमस्कार माया
                  </label>
                  <input
                    type="number"
                    id="namskar"
                    name="namskar"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    onChange={handleInput}
                    value={data.namskar}
                  />
                </div>
              </div>
              <hr className="w-full h-[1px] my-8 bg-gray-600 border-0"></hr>
              <div className="w-full flex flex-col items-center sm:flex-row  sm:justify-around p-6 bg-gray-800 shadow-sm border rounded-md">
                <button
                  type="reset"
                  className="w-1/2 sm:w-1/4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2 sm:ml-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
