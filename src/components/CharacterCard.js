import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const src = "../Img/cardImg.jpg";

export const CardExampleCard = ({ char }) => (
  <Card>
    {/* <Image src={cardImage} style={{ width: "100px" }} />{" "} */}
    <div className="name">
      <h2>Name: {char.name}</h2>
    </div>
    <div className="birth">
      <p>Birth Year: {char.birth_year}</p>
    </div>
    <div className="eyecolor">
      <p>Eye Color: {char.eye_color}</p>
    </div>
    <div className="mass">
      <p>Mass: {char.mass}</p>
    </div>
  </Card>
);

// export default function CharacterCard({ props }) {
//   return <span>todo: location</span>;
// }
