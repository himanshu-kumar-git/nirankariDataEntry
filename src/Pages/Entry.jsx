/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Entry1 from "../Components/EntryForm/Entry1";
import Entry2 from "../Components/EntryForm/Entry2";
import Entry3 from "../Components/EntryForm/Entry3";
import Entry4 from "../Components/EntryForm/Entry4";
import Entry5 from "../Components/EntryForm/Entry5";
import Preview from "../Components/EntryForm/Preview";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";

const Entry = () => {
  const [masterData, setMasterData] = useState([]);
  const [entry1, setEntry1] = useState(false);
  const [entry2, setEntry2] = useState(true);
  const [entry3, setEntry3] = useState(true);
  const [entry4, setEntry4] = useState(true);
  const [entry5, setEntry5] = useState(true);
  const navigate = useNavigate();

  const handleEntry1 = () => {
    setEntry1(true);
  };
  const handleEntry2 = () => {
    setEntry2(!entry2);
  };
  const handleEntry3 = () => {
    setEntry3(!entry3);
  };
  const handleEntry4 = () => {
    setEntry4(!entry4);
  };
  const handleEntry5 = () => {
    setEntry5(!entry5);
  };

  const updateMasterData = (newData) => {
    setMasterData([...masterData, newData]);
  };

  const editHandle = () => {
    setEntry1(false);
    setEntry2(true);
    setEntry3(true);
    setEntry4(true);
    setEntry5(true);
    navigate("/entry");
  };
  console.log(masterData);

  return (
    <>
      {entry1 ? (
        ""
      ) : (
        <Entry1
          masterData={masterData}
          handleEntry1={handleEntry1}
          handleEntry2={handleEntry2}
        />
      )}
      {entry2 ? (
        ""
      ) : (
        <Entry2
          masterData={masterData}
          handleEntry2={handleEntry2}
          handleEntry3={handleEntry3}
        />
      )}
      {entry3 ? (
        ""
      ) : (
        <Entry3
          masterData={masterData}
          handleEntry3={handleEntry3}
          handleEntry4={handleEntry4}
        />
      )}
      {entry4 ? (
        ""
      ) : (
        <Entry4
          masterData={masterData}
          handleEntry4={handleEntry4}
          handleEntry5={handleEntry5}
        />
      )}
      {entry5 ? (
        ""
      ) : (
        <Entry5 masterData={masterData} handleEntry5={handleEntry5} />
      )}
      {entry1 && entry2 && entry3 && entry4 && entry5 ? (
        <Preview masterData={masterData} editHandle={editHandle} />
      ) : (
        <div className="h-screen bg-red"></div>
      )}
    </>
  );
};

export default Entry;
