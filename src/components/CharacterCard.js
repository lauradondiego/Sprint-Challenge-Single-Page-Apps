import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export const CardExampleCard = ({ char }) => (
  <Card>
    <Image src={char.image} style={{ width: "100px" }} />{" "}
    <div className="name">
      <h2>Name: {char.name}</h2>
    </div>
    <div className="Human">
      <p>Human {char.status}</p>
    </div>
    <div className="location">
      <p>Location: {char.location.name}</p>
    </div>
    <div className="origin">
      <p>Origin: {char.origin.name}</p>
    </div>
    <div className="episodes">
      <Icon name="user" /> Episodes
      {/* <Link to={EpisodeCard}> </Link> */}
    </div>
  </Card>
);

// export default function CharacterCard({ props }) {
//   return <span>todo: location</span>;
// }
