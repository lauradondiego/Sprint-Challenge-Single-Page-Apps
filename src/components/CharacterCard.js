import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const src = "../Img/cardImg.jpg";

export const CardExampleCard = ({ char }) => (
  <Card>
    <Image
      // src="https://rickandmortyapi.com/api/character/{avatar/1}.jpeg"
      src={char.image}
      style={{ width: "100px" }}
    />{" "}
    <div className="name">
      <h2>Name: {char.name}</h2>
    </div>
    <div className="Status">
      <p>Status: {char.status}</p>
    </div>
    <div className="location">
      <p>Location: {char.location.name}</p>
    </div>
    <div className="origin">
      <p>Origin: {char.origin.name}</p>
    </div>
  </Card>
);

// export default function CharacterCard({ props }) {
//   return <span>todo: location</span>;
// }
