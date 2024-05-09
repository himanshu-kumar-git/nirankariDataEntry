/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useFirebase } from "../../../Context/Firebase";
import { useState } from "react";

export const MonthlyTable = () => {
  const [inputBranch, setInputBranch] = useState("");
  const tableRef = useRef(null);
  const firebase = useFirebase();

  const MonthlyData = firebase.dataArry.filter(
    (value) => value.ब्रांच_का_नाम === inputBranch
  );

  return (
    <div className="min-h-screen bg-gray-300 ">
      <div className="flex flex-col w-[95%] items-center bg-gray-300 mt-20 p-5 ">
        <form
          className="flex items-center w-4/5 mx-auto mb-10 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="voice-search" className="text-gray-900 mr-4 text-lg">
            Search
          </label>
          <div className="relative w-full ">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={inputBranch}
              onChange={(e) => setInputBranch(e.target.value)}
              placeholder="Enter Branch Name"
              required
            />
          </div>
        </form>
        <div className="w-11/12">
          <div className="flex flex-col justify-start  ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                className="w-full text-sm text-left rtl:text-right  text-gray-900"
                ref={tableRef}
              >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="w-full bg-gray-900 text-white text-sm">
                    <th scope="col" colSpan={4} className="px-6 py-3">
                      Zone No{}
                    </th>
                    <th scope="col" colSpan={5} className="px-6 py-3">
                      Zone Name{}
                    </th>
                    <th scope="col" colSpan={4} className="px-6 py-3">
                      Branh Name{}
                    </th>
                    <th scope="col" colSpan={5} className="px-6 py-3">
                      Month{}
                    </th>
                  </tr>
                  <tr className="text-xs bg-gray-700 ">
                    <th scope="col" className="px-6 py-3 w-96  text-gray-100">
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap text-gray-100 "
                    >
                      पंजीकृत ब्रांच में दैनिक संगत
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      महिला संगत
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      बाल संगत
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      खुली संगत
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap text-gray-100 "
                    >
                      अंग्रेजी माधयम संगत
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      ज्ञान प्रचारक का नाम
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      जोन से आये प्रचारक का नाम
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap text-gray-100 "
                    >
                      केंद्र से आये प्रचारक का नाम
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      स्थानीय स्तर सेवादल शिविर
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      क्षेत्रीय स्तर सेवादल शिविर
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      केन्द्रीय स्तर सेवादल शिविर
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 whitespace-nowrap  text-gray-100"
                    >
                      सामाजिक गतिविधिया का विवरण
                    </th>
                    <th
                      scope="colGroup"
                      colSpan={3}
                      className="px-6 py-3 text-sm text-white text-center whitespace-nowrap "
                    >
                      प्रकाशन मासिक सदस्यता की कुल संख्या
                    </th>
                  </tr>
                  <tr className="bg-gray-800 text-white ">
                    <th scope="col" colSpan={13} className="px-6 py-3 "></th>
                    <th scope="col" className="px-4  py-2 whitespace-nowrap">
                      एक नजर
                    </th>
                    <th scope="col" className="px-4  py-2 whitespace-nowrap">
                      हसती दुनिया
                    </th>
                    <th scope="col" className="px-4  py-2 whitespace-nowrap">
                      संत निरंकारी पत्रिका
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MonthlyData.map((value, key) => {
                    const {
                      अपंजीकृत_संगतों_की_संखिया,
                      एक_नजर,
                      केंद्र_से_आये_प्रचारक_का_नाम,
                      केन्द्रीय_सेवादल_शिविर,
                      क्षेत्रीय_सेवादल_शिविर,
                      जिज्ञाशु_संख्या,
                      जोन_से_आये_प्रचारक_का_नाम,
                      ज्ञान_प्रचारक_का_नाम,
                      दिनांक,
                      पंजीकृत_ब्रांच_में_दैनिक_संगत,
                      बाल_संगत,
                      महिला_संगत,
                      यूजर_का_नाम,
                      संत_निरंकारी_पत्रिका,
                      सामाजिक_गतिविधियों_का_विवरण,
                      स्थानीय_सेवादल_शिविर,
                      हसती_दुनिया,
                      ज़ोन_का_नम्बर,
                      ज़ोन_का_नाम,
                      खुली_संगत,
                      इंग्लिश_संगत,
                    } = value;
                    return (
                      <tr
                        key={key}
                        className="border-b bg-gray-400 border-gray-700 hover:bg-gray-50 "
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {दिनांक}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {पंजीकृत_ब्रांच_में_दैनिक_संगत}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {महिला_संगत}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {बाल_संगत}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {खुली_संगत}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {इंग्लिश_संगत}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {ज्ञान_प्रचारक_का_नाम}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {जोन_से_आये_प्रचारक_का_नाम}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {केंद्र_से_आये_प्रचारक_का_नाम}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {स्थानीय_सेवादल_शिविर}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {क्षेत्रीय_सेवादल_शिविर}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {केन्द्रीय_सेवादल_शिविर}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {सामाजिक_गतिविधियों_का_विवरण != ""
                            ? सामाजिक_गतिविधियों_का_विवरण
                            : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {एक_नजर}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {हसती_दुनिया}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {संत_निरंकारी_पत्रिका}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex w-full justify-center  ">
              <DownloadTableExcel
                filename="users table"
                sheet="users"
                currentTableRef={tableRef.current}
                className="w-full"
              >
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-900 hover:bg-red-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full m-6"
                >
                  Export To Excel
                </button>
              </DownloadTableExcel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
