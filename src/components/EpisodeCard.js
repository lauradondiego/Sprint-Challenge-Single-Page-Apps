import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const src = "../Img/cardImg.jpg";

export const CardExampleCard = ({ char }) => (
  <Card>
    <div className="name">
      <h2>Title: {char.name}</h2>
    </div>
    <div className="Status">
      <p>Air Date: {char.air_date}</p>
    </div>
  </Card>
);

// export default function CharacterCard({ props }) {
//   return <span>todo: location</span>;
// }
