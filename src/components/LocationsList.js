import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardExampleExtraContent } from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`).then(response => {
      setData(response.data.results);

      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      console.log("locations list", response.data);
      // console.log("characters object", setData);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        {data && data.map(char => <CardExampleExtraContent char={char} />)}
      </div>
    </section>
  );
}
