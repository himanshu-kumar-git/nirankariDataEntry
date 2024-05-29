/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Entry1 = ({ masterData, handleEntry1, handleEntry2 }) => {
  const [formData, setFormData] = useState({
    satsangName: "",
    place: "",
    time: "",
    date: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Attempt to push formData to masterData
      masterData.push(formData);
      // console.log(masterData);

      // Attempt to handle additional entries
      handleEntry1();
      handleEntry2();

      // Display success message
      toast.success("Saved Successfully");

      // Reset form data
      setFormData({
        satsangName: "",
        place: "",
        time: "",
        date: "",
      });
    } catch (error) {
      // Handle any errors that occur during the try block

      console.error("An error occurred while submitting the form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className=" bg-blue-Gray-50  mt-24 -mb-[40%] font-tiro-devanagari">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl shadow-green-300 rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-green-500 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold font-tiro-devanagari">
                ब्रांच दैनिक सत्संग संबंधित विवरण{" "}
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-gray-100">
            <form onSubmit={handleSubmit}>
              {/* User Information */}
              <h6 className="text-blueGray-400 text-xl mt-3 mb-6 font-bold uppercase">
                भाग - १
              </h6>
              <div className="flex flex-wrap">
                {/* Satsang Name */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="satsangName"
                    >
                      सत्संग का नाम
                    </label>
                    <select
                      name="satsangName"
                      id="satsangName"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.satsangName}
                      onChange={handleChange}
                      required
                    >
                      <option value="">विवरण चुने</option>
                      <option value="प्रात: कालीन सत्संग">
                        प्रात: कालीन सत्संग
                      </option>
                      <option value="बाल संगत">बाल संगत</option>
                      <option value="महिला संगत">महिला संगत</option>
                      <option value="खुली संगत">खुली संगत</option>
                      <option value="अंग्रेजी माध्यम संगत">
                        अंग्रेजी माध्यम संगत
                      </option>
                      <option value="साप्ताहिक संत्संग">
                        साप्ताहिक संत्संग
                      </option>
                      <option value="अन्य संत्संग">अन्य संत्संग</option>
                    </select>
                  </div>
                </div>

                {/* Satsang Place */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="place"
                    >
                      सत्संग का स्थान
                    </label>
                    <input
                      type="text"
                      name="place"
                      id="place"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.place}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Satsang Time */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="time"
                    >
                      सत्संग का समय
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Satsang Date */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="date"
                    >
                      सत्संग की दिनांक
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-stretch items-center ml-4 mt-5">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 "
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-sans">
                    Save and Continue
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry1;
