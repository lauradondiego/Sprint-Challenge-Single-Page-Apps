import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { CardExampleCard } from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      setData(response.data.results);

      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      console.log(response.data);
      console.log("characters object", setData);
    });
  }, [data]);

  return (
    <section className="character-list grid-view">
      <h2>{data && data.map(char => <CardExampleCard char={char} />)}</h2>
    </section>
  );
}
