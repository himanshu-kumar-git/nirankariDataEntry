/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

const DetailhtmlhtmlForm = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const userName = () => {
    try {
      return firebase.user.email;
    } catch (err) {
      console.log("error block run", err);
    }
  };
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
  const userEmail = userName();

  useEffect(() => {
    if (firebase.isLoggedIn === false) navigate("/login");
    else {
      fetchData().then((data) => {
        setBranchName(data.branch);
        setUserName(data.username);
        setZoneName(data.zoneName);
        setZoneNumber(data.zoneNumber);
      });
    }
  });

  const [username, setUserName] = useState("");
  const [zoneNumber, setZoneNumber] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [branch, setBranchName] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isCheckedSocial, setCheckedSocial] = useState(false);

  const handleCheck = (e) => setChecked(e.target.checked);
  const handleCheckSocial = (e) => setCheckedSocial(e.target.checked);

  const todayDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fulldate = `${year}-${month}-${day}`;
    return fulldate;
  };

  // useEffect(() => {

  // });
  const TodayDate = todayDate();

  const [disableData, setDisableData] = useState({
    date: TodayDate,
  });

  const [data, setData] = useState({
    dailyBranhFixSangat: "",
    balSangat: "",
    mahilaSangat: "",
    KhuliSangat: "",
    englishSangat: "",
    gyanPrachark: "",
    zonGyanPrachark: "",
    centerGyanPrachark: "",
    gyanReciversNumber: "",
    localSevadal: "",
    shetriyShevadal: "",
    centralSevadal: "",
    socialWorkDetail: "",
    akNajar: "",
    hastiDuniya: "",
    santNirankariPatrika: "",
    unregisterSangat: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown2 = () => {
    setIsOpen2(false);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const closeDropdown3 = () => {
    setIsOpen3(false);
  };

  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const closeDropdown4 = () => {
    setIsOpen4(false);
  };
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };

  const closeDropdown5 = () => {
    setIsOpen5(false);
  };

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    closeDropdown();
    closeDropdown1();
    closeDropdown2();
    closeDropdown3();
    closeDropdown4();
    closeDropdown5();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.dailyBranhFixSangat ||
      !data.balSangat ||
      !data.mahilaSangat ||
      !data.gyanPrachark ||
      !data.zonGyanPrachark ||
      !data.centerGyanPrachark ||
      !data.localSevadal ||
      !data.shetriyShevadal ||
      !data.centralSevadal ||
      !data.akNajar ||
      !data.hastiDuniya ||
      !data.santNirankariPatrika ||
      !username ||
      !branch ||
      !disableData.date ||
      !zoneName ||
      !zoneNumber
    ) {
      return;
    }
    await firebase.handleCreateNewData1(
      username,
      disableData.date,
      zoneName,
      zoneNumber,
      branch,
      data.dailyBranhFixSangat,
      data.balSangat,
      data.mahilaSangat,
      data.englishSangat,
      data.KhuliSangat,
      data.gyanPrachark,
      data.zonGyanPrachark,
      data.centerGyanPrachark,
      data.gyanReciversNumber,
      data.localSevadal,
      data.shetriyShevadal,
      data.centralSevadal,
      data.socialWorkDetail,
      data.akNajar,
      data.hastiDuniya,
      data.santNirankariPatrika,
      data.unregisterSangat,
      username,
      branch
    );
    alert("Successfully Subimit....");
    handleClearAll();
    navigate("/detailform");
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
      <div className="bg-gray-300 min-h-screen flex justify-center items-center text-white scroll-smooth">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500 via-green-400">
              एक आदर्श ब्रांच की ओर...
            </span>
          </h1>
        </div>
        <svg
          className="animate-bounce w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="green"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-full min-h-screen bg-gray-200 text-white flex justify-center items-center">
        <form
          className="flex flex-col   w-full md:w-3/4 px-4 py-8 md:px-8 md:py-16"
          onSubmit={handleSubmit}
        >
          <div>
            <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
            <h2 className="text-3xl  text-black font-extrabold  w-full text-center tracking-wide underline underline-offset-8 decoration-gray-400">
              ब्रांच की मासिक गतिविधियों का विवरण
            </h2>
            <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                ज़ोन का विवरण
              </p>
            </div>

            <div className="flex flex-col w-4/5 b md:w-4/5 md:flex-row md:justify-around flex-wrap md:space-x-4">
              <div className="mt-4 md:mt-0 md:max-w-40">
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  id="userName"
                  aria-label="disabled input 2"
                  className="bg-gray-400 border-none text-gray-800 text-sm rounded-lg  block w-full p-3 cursor-not-allowed  "
                  value={username}
                  disabled
                  readOnly
                  required
                />
              </div>
              <div className="mt-4 md:mt-0 md:max-w-40">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  दिनांक
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  aria-label="disabled input 2"
                  className="bg-gray-400 border-none  text-gray-800 text-sm rounded-lg  block w-full p-3 cursor-not-allowed  "
                  value={disableData.date}
                  disabled
                  readOnly
                  required
                />
              </div>
              <div className="mt-4 md:mt-0 md:max-w-40">
                <label
                  htmlFor="zone-number"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  जोन न०
                </label>
                <input
                  type="text"
                  name="zoneNumber"
                  aria-label="disabled input 2"
                  className="bg-gray-400 border-none  text-gray-800 text-sm rounded-lg  block w-full p-3 cursor-not-allowed  "
                  value={zoneNumber}
                  disabled
                  required
                  readOnly
                />
              </div>
              <div className="mt-4 md:mt-0 md:max-w-40">
                <label
                  htmlFor="zone-name"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  जोन का नाम
                </label>
                <input
                  type="text"
                  id="zoneName"
                  aria-label="disabled input 2"
                  className="bg-gray-400 border-none  text-gray-800 text-sm rounded-lg  block w-full p-3 cursor-not-allowed  "
                  value={zoneName}
                  disabled
                  required
                  readOnly
                />
              </div>
              <div className="mt-4 md:mt-0 md:max-w-40">
                <label
                  htmlFor="branch-name"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  ब्रांच का नाम
                </label>
                <input
                  type="text"
                  id="brancName"
                  aria-label="disabled input 2"
                  className="bg-gray-400 border-none  text-gray-800 text-sm rounded-lg  block w-full p-3 cursor-not-allowed  "
                  value={branch}
                  disabled
                  readOnly
                  required
                />
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start ">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                संगत का विवरण
              </p>
            </div>
            <div className="flex flex-col w-full md:w-4/5  min-h-80 flex-wrap items-center md:flex-row md:space-x-4  ">
              {/* Add fields for section 02 */}
              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown}
                >
                  पंजीकृत संगत का विवरण
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="brnch-fix-sangat-yes"
                          type="radio"
                          name="dailyBranhFixSangat"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="brnch-fix-sangat-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="brnch-fix-sangat-no"
                          type="radio"
                          name="dailyBranhFixSangat"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="brnch-fix-sangat-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown1}
                >
                  बाल संगत
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen1 ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="balsatsetra-yes"
                          type="radio"
                          name="balSangat"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="balsatsetra-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="balSangat-no"
                          type="radio"
                          name="balSangat"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="balSangat-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown2}
                >
                  महिला संगत
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen2 ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="mahila-sangat-yes"
                          type="radio"
                          name="mahilaSangat"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="mahila-sangat-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="mahila-sangat-no"
                          type="radio"
                          name="mahilaSangat"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="mahila-sangat-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown3}
                >
                  खुली संगत
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen3 ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="khuli-sangat-yes"
                          type="radio"
                          name="KhuliSangat"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="khuli-sangat-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="khuli-sangat-no"
                          type="radio"
                          name="KhuliSangat"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="khuli-sangat-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown4}
                >
                  अंग्रेजी माध्यम संगत
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen4 ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="english-sangat-yes"
                          type="radio"
                          name="englishSangat"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="english-sangat-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="english-sangat-no"
                          type="radio"
                          name="englishSangat"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="english-sangat-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start  ">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                मिशन प्रचारक विवरण
              </p>
            </div>

            {/* Add fields for section 03 */}
            <div className="flex flex-col  w-full md:w-3/4 md:flex-row md:space-x-4">
              <div className="mt-4 md:mt-0">
                <label
                  htmlFor="gyanPrachark"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  ज्ञान प्रचारक का नाम
                </label>
                <input
                  type="text"
                  id="gyanPrachark"
                  name="gyanPrachark"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="सतपाल जी "
                  value={data.gyanPrachark}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mt-4 md:mt-0">
                <label
                  htmlFor="zonGyanPrachark"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  जोन से आये प्रचारक का नाम
                </label>
                <input
                  type="text"
                  id="zonGyanPrachark"
                  name="zonGyanPrachark"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="कुलभूषण चौधरी  "
                  value={data.zonGyanPrachark}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mt-4 md:mt-0">
                <label
                  htmlFor="centerGyanPrachark"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  केंद्र से आये प्रचारक का नाम
                </label>
                <input
                  type="text"
                  id="centerGyanPrachark"
                  name="centerGyanPrachark"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="दीपक चौधरी  "
                  value={data.centerGyanPrachark}
                  onChange={handleInput}
                  required
                />
              </div>
              {isChecked ? (
                <div className="mt-4 md:mt-0">
                  <label
                    htmlFor="gyanreciver"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    ज्ञान प्राप्तकर्ता सं -
                  </label>
                  <input
                    type="number"
                    id="gyanreciver"
                    name="gyanReciversNumber"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                    value={data.gyanReciversNumber}
                    onChange={handleInput}
                  />
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div className="flex items-center mt-4 ml-4">
            <input
              id="link-checkbox"
              type="checkbox"
              checked={isChecked}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleCheck}
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              क्या ज्ञान प्रदान किया गया{" "}
            </label>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start ">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                सेवादल सम्बधित विवरण -
              </p>
            </div>
            <div className="flex flex-col w-full md:w-3/4  md:flex-row md:space-x-4  ">
              {/* Add fields for section 02 */}

              <div className="w-4/5 md:w-52 mt-6 md:mt-0 flex items-center flex-col">
                <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-black bg-gray-400 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm px-10 py-2.5  inline-flex items-center whitespace-nowrap w-full md:w-full text-center"
                  type="button"
                  onClick={toggleDropdown5}
                >
                  स्थानीय स्तर सेवादल शिविर
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownBgHover"
                  className={`z-10 ${
                    isOpen5 ? "" : "hidden"
                  }  bg-gray-400 w-full rounded-sm -mt-2 shadow-lime-100 `}
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="local-sevadal-yes"
                          type="radio"
                          name="localSevadal"
                          value="हा"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="local-sevadal-yes"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          हां
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="local-sevadal-no"
                          type="radio"
                          name="localSevadal"
                          value="नहीं"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleInput}
                        />
                        <label
                          htmlFor="local-sevadal-no"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >
                          नहीं
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex  md:flex-col  justify-between md:w-1/5 ">
                <p className="text-sm text-gray-900 dark:text-white font-medium mb-4">
                  क्षेत्रीय स्तर सेवादल शिविर
                </p>
                <div className="flex  md:w-9/12   ">
                  <div className="flex items-center mb-4 md:w-full">
                    <input
                      id="sevadal-setra-yes"
                      type="radio"
                      name="shetriyShevadal"
                      value="हा"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="sevadal-setra-yes"
                      className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      हा
                    </label>
                  </div>

                  <div className="flex items-center mb-4 md:w-full">
                    <input
                      id="sevadal-setra-no"
                      type="radio"
                      name="shetriyShevadal"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleInput}
                      value="नहीं"
                    />
                    <label
                      htmlFor="sevadal-setra-no"
                      className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      नही
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex  md:flex-col   justify-between  md:w-1/5 ">
                <p className="text-sm text-gray-900 dark:text-white font-medium mb-4">
                  केंदीय स्तर सेवादल शिविर
                </p>
                <div className="flex md:w-9/12  ">
                  <div className="flex items-center mb-4 md:w-full">
                    <input
                      id="sevadal-center-yes"
                      type="radio"
                      name="centralSevadal"
                      value="हा"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="sevadal-center-yes"
                      className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      हा
                    </label>
                  </div>

                  <div className="flex items-center mb-4 md:w-full">
                    <input
                      id="sevadal-center-no"
                      type="radio"
                      name="centralSevadal"
                      value="नहीं"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="sevadal-center-no"
                      className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      नही
                    </label>
                  </div>
                </div>
              </div>
              {isCheckedSocial ? (
                <div className="mt-4 md:mt-0">
                  <label
                    htmlFor="samajikgatividhi"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    {" "}
                    विवरण -{" "}
                  </label>
                  <textarea
                    id="samajikgatividhi"
                    name="socialWorkDetail"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInput}
                  />
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div className="flex items-center mt-4 ml-4">
            <input
              id="link--socialWork"
              type="checkbox"
              checked={isCheckedSocial}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleCheckSocial}
            />
            <label
              htmlFor="link--socialWork"
              className="ms-2 text-zs font-medium text-gray-900 dark:text-gray-300"
            >
              क्या कोई सामाजिक गतिविधि की है -{" "}
            </label>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          {/* Add more sections if needed */}
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start ">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                प्रकाशन मासिक सदस्यता की कुल संख्या -
              </p>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  border rounded-xl ">
                  <tr className="bg-gray-700 text-white">
                    <th scope="col" className="px-6 py-3">
                      प्रकाशन पत्रिका/पुस्तक
                    </th>
                    <th scope="col" className="px-6 py-3">
                      संख्या
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200 border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <p className="text-xl text-gray-900 dark:text-white font-bold">
                        एक नजर
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <div className="max-w-md mx-auto">
                        <div className="relative">
                          <input
                            type="number"
                            id="akNajar"
                            name="akNajar"
                            className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter here .. "
                            value={data.akNajar}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <p className="text-xl text-gray-900 dark:text-white font-bold">
                        हंसती दुनिया
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <div className="max-w-md mx-auto">
                        <div className="relative">
                          <input
                            type="number"
                            id="hastiDuniya"
                            name="hastiDuniya"
                            className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter here .. "
                            value={data.hastiDuniya}
                            onChange={handleInput}
                            required
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <p className="text-xl text-gray-900 dark:text-white font-bold">
                        संत निरंकारी पत्रिका
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <div className="max-w-md mx-auto">
                        <div className="relative">
                          <input
                            type="number"
                            id="santNirankariPatrika"
                            name="santNirankariPatrika"
                            className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter here .. "
                            value={data.santNirankariPatrika}
                            onChange={handleInput}
                            required
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          <div className="p-3 bg-gray-300 border rounded-xl w-full flex flex-col justify-center items-center md:space-x-4">
            <div className="w-full  mb-4 text-center md:text-start ">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                अन्य विवरण -
              </p>
            </div>
            <table>
              <tbody>
                <tr className="bg-gray-400 border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <p className="text-md text-gray-900 dark:text-white font-bold">
                      अपंजीकृत संगतो की संख्या
                    </p>
                  </th>
                  <td className="px-6 py-4">
                    <div className="max-w-md mx-auto">
                      <div className="relative">
                        <input
                          type="number"
                          id="unregisterSangat"
                          name="unregisterSangat"
                          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter here .. "
                          onChange={handleInput}
                          value={data.unregisterSangat}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700"></hr>
          <div className="flex justify-center w-9/12">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2 ml-[25%]"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2 ml-[25%]"
              onClick={handleClearAll}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default DetailhtmlhtmlForm;
