/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Entry3 = ({ masterData, handleEntry4, handleEntry3 }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    bahan: "",
    bhai: "",
    total: "",
    namaskar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Push formData to masterData
      masterData.push(formData);
      // console.log(masterData);

      // Perform actions like handleEntry3 and handleEntry4
      handleEntry3();
      handleEntry4();

      // Display success message
      toast.success("Saved Successfully");

      // Reset form data
      setFormData({
        bahan: "",
        bhai: "",
        total: "",
        namaskar: "",
      });
    } catch (error) {
      // Handle any errors that occur during the try block
      console.error("An error occurred while submitting the form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-1 bg-blueGray-50 -mb-[40%] mt-24 font-tiro-devanagari">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl shadow-purple-300 rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-purple-400 mb-0 px-6 py-6">
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
                भाग - ३
              </h6>
              <div className="flex flex-wrap">
                {/* Number of Sisters */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="bahan"
                    >
                      बहनों की संखिया
                    </label>
                    <input
                      type="number"
                      name="bahan"
                      id="bahan"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.bahan}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Number of Brothers */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="bhai"
                    >
                      भाइयो की संखिया
                    </label>
                    <input
                      type="number"
                      name="bhai"
                      id="bhai"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.bhai}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Total Number of Congregants */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="total"
                    >
                      कुल संगत की संख्या
                    </label>
                    <input
                      type="number"
                      name="total"
                      id="total"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.total}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Number of Namaskars */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="namaskar"
                    >
                      नमस्कार
                    </label>
                    <input
                      type="number"
                      name="namaskar"
                      id="namaskar"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.namaskar}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-stretch items-center ml-4 mt-5">
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                  type="submit"
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

export default Entry3;
