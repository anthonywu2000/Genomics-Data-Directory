import React from "react";
import Loader from "./components/Loader";
import usePsets from "./utils/usePsets";
import Display from "./Display.jsx";

// creates the page which contains the information from the ORCESTRA API
const PsetAPI = () => {
  const { filter, filteredPsets, isLoading, handleFilterChange } = usePsets('http://localhost:3000/api/psets');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Display filter={filter} func={handleFilterChange} dat={filteredPsets} label={"pset-api-table"} />
  );
}

export default PsetAPI;
