import React from "react";
import { Card, Icon } from "semantic-ui-react";

// const src = "../Img/cardImg.jpg";

export const CardExampleExtraContent = ({ char }) => (
  <Card>
    <Card.Content header={char.name} />
    <Card.Content description={char.dimension} />
    <Card.Content extra>
      <Icon name="user" />{char.residents.length} Residents
    </Card.Content>
  </Card>
);

// export default function LocationCard ({ name, type, dimension, residents }) {
//   // image={image}
//   return (<span>todo: location</span>
//   )
// }
