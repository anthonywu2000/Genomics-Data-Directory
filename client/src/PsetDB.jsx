import React from "react";
import Loader from "./components/Loader";
import usePsets from "./utils/usePsets";
import Display from "./Display.jsx";

// creates the page which contains the data from MongoDB
const PsetDB = () => {
  const { filter, filteredPsets, isLoading, handleFilterChange } = usePsets('http://localhost:3000/api/pset-database');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Display filter={filter} func={handleFilterChange} dat={filteredPsets} label={"pset-db-table"} />
  );
}

export default PsetDB;
