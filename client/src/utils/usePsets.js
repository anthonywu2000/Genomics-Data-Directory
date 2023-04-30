import { useState, useEffect } from "react";
import filterfun from "./filterfun";

/**
 * Custom React hook to fetch and filter data from an API endpoint.
 * @param {string} apiEndpoint - The URL of the API endpoint to fetch data from.
 * @returns {Object} - An object containing filtered data, filter value, loading state and a filter change handler.
 */
const usePsets = (apiEndpoint) => {
  // state of the data
  const [psets, setPsets] = useState([]);
  
  // specifies the loading state between data fetching process
  const [isLoading, setIsLoading] = useState(true);
  
  // state of the filtering input
  const [filter, setFilter] = useState('');
  
  // fetch and parse data here
  useEffect(() => {
    fetch(apiEndpoint)
     .then(response => response.json())
     .then((data) => {
        setPsets(data.map((obj) => ({ name: obj.name, doi: obj.doi || obj.repositories[0].doi })));
        setIsLoading(false);
     })
     .catch((error) => console.error(error));
  }, [apiEndpoint]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // retreive the filtered pset
  const filteredPsets = filterfun(psets, filter);

  return { filter, filteredPsets, isLoading, handleFilterChange };
}

export default usePsets;
