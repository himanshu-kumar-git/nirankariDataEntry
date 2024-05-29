/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Entry5 = ({ masterData, handleEntry5 }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    gyanprachark: "",
    nameOfPracharak: "",
    nameOfPracharakSanchalan: "",
    social: "",
  });
  const [gyanPradan, setGyanPradan] = useState(false);
  const [tableRows, setTableRows] = useState([
    { sr: "", name: "", address: "", email: "" },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setGyanPradan(e.target.checked);
  };

  const handleRowChange = (index, e) => {
    const newRows = [...tableRows];
    newRows[index][e.target.name] = e.target.value;
    setTableRows(newRows);
  };

  const handleAddRow = () => {
    setTableRows([...tableRows, { sr: "", name: "", address: "", email: "" }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = tableRows.filter((_, rowIndex) => rowIndex !== index);
    setTableRows(newRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const finalFormData = {
        ...formData,
        gyanPradan,
        tableRows: gyanPradan ? tableRows : [],
      };

      masterData.push(finalFormData);
      handleEntry5();
      toast.success("Saved Successfully", {
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      // console.log(masterData);

      setFormData({
        gyanprachark: "",
        nameOfPracharak: "",
        nameOfPracharakSanchalan: "",
        social: "",
      });
      setGyanPradan(false);
      setTableRows([{ sr: "", name: "", address: "", email: "" }]);
    } catch (e) {
      toast.error("try again ..");
    }
  };

  return (
    <section className="py-1 bg-blueGray-50 -mb-[40%] mt-24 font-tiro-devanagari">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl shadow-lime-300 rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-lime-500 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold font-tiro-devanagari">
                ब्रांच दैनिक सत्संग संबंधित विवरण{" "}
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              {/* User Information */}
              <h6 className="text-blueGray-400 text-xl mt-3 mb-6 font-bold uppercase">
                भाग - ५
              </h6>
              <div className="flex flex-wrap">
                {/* gyanprachark */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="gyanprachark"
                    >
                      ज्ञान प्रचारक संबधित विवरण
                    </label>
                    <select
                      name="gyanprachark"
                      id="gyanprachark"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.gyanprachark}
                      onChange={handleChange}
                    >
                      <option value="">विवरण चुने</option>
                      <option value="स्थानीय ज्ञान प्रचारक">
                        स्थानीय ज्ञान प्रचारक
                      </option>
                      <option value="जोन से आये ज्ञान प्रचारक">
                        जोन से आये ज्ञान प्रचारक
                      </option>
                      <option value="केंद्र से आये ज्ञान प्रचारक">
                        केंद्र से आये ज्ञान प्रचारक
                      </option>
                    </select>
                  </div>
                </div>

                {/* nameOfPracharak */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="nameOfPracharak"
                    >
                      ज्ञान प्रचारक का नाम
                    </label>
                    <input
                      type="text"
                      name="nameOfPracharak"
                      id="nameOfPracharak"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.nameOfPracharak}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="w-full px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-lg font-bold mb-2">
                      क्या ज्ञान प्रदान किया गया है?
                    </label>
                    <input
                      type="checkbox"
                      name="gyanPradan"
                      id="gyanPradan"
                      className="peer mr-2 w-4 h-4 text-lime-600 bg-lime-500 border-lime-300 rounded focus:ring-lime-500 focus:ring-2 checked:bg-lime-600 checked:border-lime-600"
                      checked={formData.gyanPradan}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>

                {/* Table */}
                {gyanPradan && (
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-lg font-bold mb-2">
                        विवरण तालिका
                      </label>
                      <table className="min-w-full bg-lime-50 rounded-2xl border-b-2 border-lime-900 ">
                        <thead>
                          <tr>
                            <th className="px-1 py-2 border">क्रo</th>
                            <th className="px-4 py-2 border">नाम</th>
                            <th className="px-4 py-2 border">पता</th>
                            <th className="px-4 py-2 border">मोबाइल</th>
                            <th className="px-4 py-2 border">क्रिया</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableRows.map((row, index) => (
                            <tr key={index}>
                              <td className="border px-1 py-2">{index + 1}</td>
                              <td className="border px-1 py-2">
                                <input
                                  type="text"
                                  name="name"
                                  value={row.name}
                                  onChange={(e) => handleRowChange(index, e)}
                                  className="border-1 border-lime-900 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-lime-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 focus:ring-lime-800"
                                  required
                                />
                              </td>
                              <td className="border px-1 py-2">
                                <input
                                  type="text"
                                  name="address"
                                  value={row.address}
                                  onChange={(e) => handleRowChange(index, e)}
                                  className="border-1 border-lime-900 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-lime-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 focus:ring-lime-800"
                                  required
                                />
                              </td>
                              <td className="border px-1 py-2">
                                <input
                                  type="text"
                                  name="email"
                                  value={row.email}
                                  onChange={(e) => handleRowChange(index, e)}
                                  className="border-1 border-lime-900 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-lime-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 focus:ring-lime-800"
                                  required
                                />
                              </td>
                              <td className="border px-1 py-2">
                                <button
                                  type="button"
                                  onClick={() => handleDeleteRow(index)}
                                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 font-sans"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <button
                          type="button"
                          onClick={handleAddRow}
                          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-600 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-14 ml-2 w-[150px]"
                        >
                          नई पंक्ति जोड़ें
                        </button>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-600 group-hover:from-teal-300 group-hover:to-lime-600 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 ml-4"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-sans">
                  Save and Preview
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry5;
