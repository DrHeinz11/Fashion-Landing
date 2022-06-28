import Img1 from "../assets/img/sana-1.png";
import Img2 from "../assets/img/sana-2.png";
import Img3 from "../assets/img/sana-3.png";
import { Image, Grid, GridItem } from "@chakra-ui/react";

function GaleryHero() {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={"15px"}>
      <GridItem w="100%" h="100%">
        <Image
          src={Img2}
          height="80%"
          width={"290px"}
          objectFit="cover"
          margin="auto"
          position="relative"
          top={"50px"}
        />
      </GridItem>
      <GridItem w="100%" h="100%">
        <Image src={Img1} />
      </GridItem>
      <GridItem w="100%" h="100%">
        <Image
          src={Img3}
          objectFit='cover'
          objectPosition={'top'}
          width={'290px'}
          height="80%"
          margin="auto"
          position="relative"
          top={"50px"}
        />
      </GridItem>
    </Grid>
  );
}

export default GaleryHero;
