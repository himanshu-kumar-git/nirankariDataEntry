/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Entry4 = ({ masterData, handleEntry4, handleEntry5 }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    aknajar: "",
    hastiduniya: "",
    snmPtrika: "",
    nonRegister: "",
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
      masterData.push(formData);
      toast.success("saved successfully");
      // console.log(masterData);

      handleEntry4();
      handleEntry5();

      setFormData({
        aknajar: "",
        hastiduniya: "",
        snmPtrika: "",
        nonRegister: "",
      });
    } catch (e) {
      toast.error("try again");
    }
  };

  return (
    <section className="py-1 bg-blueGray-50 -mb-[40%] mt-24 font-tiro-devanagari">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl shadow-yellow-300 rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-yellow-700 mb-0 px-6 py-6">
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
                भाग - ४
              </h6>
              <div className="flex flex-wrap">
                {/* Number of Sisters */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="aknajar"
                    >
                      एक नजर
                    </label>
                    <input
                      type="number"
                      name="aknajar"
                      id="aknajar"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.aknajar}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Number of Brothers */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="hastiduniya"
                    >
                      हसती दुनिया
                    </label>
                    <input
                      type="number"
                      name="hastiduniya"
                      id="hastiduniya"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.hastiduniya}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* snmPtrika Number of Congregants */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="snmPtrika"
                    >
                      संत निरंकारी पर्त्रिका
                    </label>
                    <input
                      type="number"
                      name="snmPtrika"
                      id="snmPtrika"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.snmPtrika}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Number of nonRegisters */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="nonRegister"
                    >
                      अपंजीकृत संगतों की संख्या
                    </label>
                    <input
                      type="number"
                      name="nonRegister"
                      id="nonRegister"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.nonRegister}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-stretch items-center ml-4 mt-5">
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
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

export default Entry4;
