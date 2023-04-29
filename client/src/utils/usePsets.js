import { useState, useEffect } from "react";
import filterfun from "./filterfun";

const usePsets = (apiEndpoint) => {
  const [psets, setPsets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(apiEndpoint)
     .then(response => response.json())
     .then((data) => {
        setPsets(data.map((repo) => ({ name: repo.name, doi: repo.doi || repo.repositories[0].doi })));
        setIsLoading(false);
     })
     .catch((error) => console.error(error));
  }, [apiEndpoint]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPsets = filterfun(psets, filter);

  return { filter, filteredPsets, isLoading, handleFilterChange };
}

export default usePsets;