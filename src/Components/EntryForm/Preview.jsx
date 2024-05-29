/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import { useFirebase } from "../../Context/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Preview = ({ masterData, editHandle }) => {
  const combinedObject = masterData.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});

  // Log the combined object
  // console.log("Combined Object:", combinedObject);
  // console.log("table:", combinedObject.tableRows);

  const firebase = useFirebase();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUserName = async () => {
      try {
        const userData = await firebase.getUserData();
        setUserName(userData[0].username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, [firebase]); // Ensure firebase is included in the dependency array

  const storeData = () => {
    if (firebase.user) {
      firebase
        .handleStoreData(userName, firebase.user.email, combinedObject)
        .then((message) => {
          console.log(message);
          toast.success("successfully submited");
          editHandle();
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("failed try again");
        });
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="mt-16 mb-5 w-full lg:w-[80%] shadow-xl rounded-xl shadow-teal-500">
        <div className=" font-bold border-t border-teal-100 text-center p-5 mb-5">
          <h1 className="text-2xl font-sans">Preview</h1>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl ">
          <thead className="text-sm text-white uppercase bg-teal-700  ">
            <tr className="">
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                Title
              </th>

              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                दिनांक
              </th>
              <td className="px-6 py-4 text-teal-900">{combinedObject.date}</td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                सत्संग का नाम
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.satsangName}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                सत्संग का समय
              </th>
              <td className="px-6 py-4 text-teal-900">{combinedObject.time}</td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                सत्संग का स्थान
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.place}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                स्टेज की सेवा
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.stage}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                स्टेज संचालन की सेवा
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.stageSanchalan}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                सेवादल का विवरण
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.sevadal}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                यदि कोई सामाजिक गतिविधि की है -
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.social}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                बहनों की संखिया
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.bahan}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                भाइयो की संखिया
              </th>
              <td className="px-6 py-4 text-teal-900">{combinedObject.bhai}</td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                कुल संगत की संख्या
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.total}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                नमस्कार
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.namaskar}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                एक नजर
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.aknajar}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                हसती दुनिया
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.hastiduniya}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                संत निरंकारी पर्त्रिका
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.snmPtrika}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                अपंजीकृत संगतों की संख्या
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.nonRegister}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                ज्ञान प्रचारक संबधित विवरण
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.nameOfPracharakSanchalan}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                ज्ञान प्रचारक का नाम
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.nameOfPracharak}
              </td>
            </tr>
            <tr className="bg-teal-50 border-b border-gray-400  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-tiro-devanagari"
              >
                क्या ज्ञान प्रदान किया गया है?
              </th>
              <td className="px-6 py-4 text-teal-900">
                {combinedObject.gyanPradan ? "हा" : "नही"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="relative mt-10 font-tiro-devanagari bg-teal-100">
          <h1 className="font-tiro-devanagari text-2xl text-center text-black p-10 underline underline-offset-8">
            {" "}
            ज्ञान प्राप्तकर्ताओ का विवरण{" "}
          </h1>
          <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-lg text-black uppercase bg-teal-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  नाम
                </th>
                <th scope="col" className="px-6 py-3">
                  पता
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  मोबाइल नंबर
                </th>
              </tr>
            </thead>
            <tbody>
              {combinedObject.tableRows.map((value, key) => {
                return (
                  <tr
                    className="bg-teal-100 border-b border-teal-200"
                    key={key}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {value.name}
                    </th>
                    <td className="px-6 py-4 text-teal-900">{value.address}</td>
                    <td className="px-6 py-4 text-teal-900">{value.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex justify-around mt-20 bg-teal-900 p-5">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
              onClick={editHandle}
            >
              Preview
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              onClick={storeData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
