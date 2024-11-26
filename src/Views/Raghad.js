import React from "react";

import useFetchData from "../Hooks/GetAPI"; // Import the custom hook

const url = "cities-cost-of-living-and-average-prices-api.p.rapidapi.com";
// Call the custom hook and pass the URL

function List() {
  const { data: items, isLoaded, isError } = useFetchData(url);
  console.log(items);
  if (isError) {
    return <div>Error: Unable to fetch data!</div>;
  }
  if (isLoaded) {
    return <div> loading ... </div>;
  }
  return (
    <div className="m-5 text-center">
      <h4>Raghad Page</h4>
    </div>
  );
}

export default List;
