import { Grid, GridItem, Image } from "@chakra-ui/react";
import Img1 from "./newcollection-1.png";
import Img2 from "./newcollection-1-1.png";
import Img3 from "./newcollection-1-3.png";
import Img4 from "./newcollection-2-1.png";
import Img5 from "./newcollection-2-2.png";
import Img6 from "./newcollection-2-3.png";
import Card from "./Card";
import React from "react";

export default function Galery() {
  return (
    <Grid
      gridTemplateAreas={{
        lg: `"Img2 Img1 Img3"
"Img2 Img1 Img3"
"Img6 Card Img4"
"Img6 Img5 Img4"
". Img5 ."`,
        base: ` "Img1 Img6"
"Img1 Img3"
"Img4 Img3"
"Img5 Img2"
"Img5 Img2"`,
      }}
      gridTemplateRows={{
        lg: "repeat(2,.5fr) auto .75fr .5fr",
        base: "repeat(2, .5fr 0.5fr) .5fr",
      }}
      gap="10px"
    >
      <GridItem
        display={{ lg: "block", base: "none" }}
        height="fit-content"
        gridArea="Card"
      >
        <Card />
      </GridItem>
      <GridItem gridArea="Img1">
        <Image src={Img1} h="100%" objectFit="cover" />
      </GridItem>

      <GridItem gridArea="Img2">
        {" "}
        <Image src={Img2} h="100%" objectFit="cover" />
      </GridItem>

      <GridItem gridArea="Img3">
        {" "}
        <Image src={Img3} h="100%" objectFit="cover" />
      </GridItem>

      <GridItem gridArea="Img4">
        {" "}
        <Image src={Img4} h="100%" objectFit="cover" />
      </GridItem>

      <GridItem gridArea="Img5">
        {" "}
        <Image src={Img5} h="100%" objectFit="cover" />
      </GridItem>

      <GridItem gridArea="Img6">
        {" "}
        <Image src={Img6} h="100%" objectFit="cover" />
      </GridItem>
    </Grid>
  );
}
