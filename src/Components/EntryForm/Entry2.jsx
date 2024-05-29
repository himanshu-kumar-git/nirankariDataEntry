/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Entry2 = ({ masterData, handleEntry2, handleEntry3 }) => {
  const [formData, setFormData] = useState({
    sevadal: "",
    stage: "",
    stageSanchalan: "",
    social: "",
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
      masterData.push(formData);
      // console.log(masterData);
      handleEntry2();
      handleEntry3();
      toast.success("Saved Successfully");

      setFormData({
        sevadal: "",
        stage: "",
        stageSanchalan: "",
        social: "",
      });
    } catch (e) {
      toast.error("try again");
    }
  };

  return (
    <section className="py-1 bg-blueGray-50 -mb-[40%] mt-24 font-tiro-devanagari">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl shadow-blue-300 rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-blue-500 mb-0 px-6 py-6">
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
                भाग - २
              </h6>
              <div className="flex flex-wrap">
                {/* Sevadal */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="sevadal"
                    >
                      सेवादल संबधित विवरण
                    </label>
                    <select
                      name="sevadal"
                      id="sevadal"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.sevadal}
                      onChange={handleChange}
                    >
                      <option value="">विवरण चुने</option>
                      <option value="स्थानीय सेवादल">स्थानीय सेवादल</option>
                      <option value="क्षेत्रीय सेवादल">क्षेत्रीय सेवादल</option>
                      <option value="केन्द्रीय सेवादल">केन्द्रीय सेवादल</option>
                    </select>
                  </div>
                </div>

                {/* Stage Service */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="stage"
                    >
                      स्टेज सेवा
                    </label>
                    <input
                      type="text"
                      name="stage"
                      id="stage"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.stage}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Stage Management Service */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="stageSanchalan"
                    >
                      स्टेज संचालन सेवा
                    </label>
                    <input
                      type="text"
                      name="stageSanchalan"
                      id="stageSanchalan"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.stageSanchalan}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Social Activity */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                      htmlFor="social"
                    >
                      यदि कोई सामाजिक गतिविधि की है -
                    </label>
                    <input
                      type="text"
                      name="social"
                      id="social"
                      className="border-y-2 border-gray-400 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow-xl focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      value={formData.social}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-stretch items-center ml-4 mt-5">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Save and Continoue
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

export default Entry2;
