import { Grid, GridItem, Text, Heading, Image, Box } from "@chakra-ui/react";
import Cta from "../../../components/Cta";
import Img1 from "./mina-collection1.png";
import Img2 from "./mina-collection2.png";
import Img3 from "./mina-collection3.png";

function NewCollection() {
  return (
    <Box margin="auto">
      <Grid
        maxWidth={"1000px"}
        marginBlock={{ lg: "50px", base: "0" }}
        marginInline={"auto"}
        gridTemplateAreas={{
          lg: `'Img3 Copy Img2'
    'Img3 Copy Img2'
    'Img3 Img1 Img2'`,
          base: `'Copy Copy'
    'Img1 Img1'
    'Img2 Img3'`,
        }}
        gridTemplateColumns={{ lg: "repeat(3,1fr)", base: "repeat(2,1fr)" }}
        gap={"15px"}
        alignItems="end"
        justifyItems={"center"}
      >
        <GridItem
          area={"Copy"}
          display="flex"
          flexDirection="column"
          gap="15px"
          alignItems="center"
        >
          <Text textAlign="center" fontWeight="300" textTransform="uppercase">
            The collection
          </Text>
          <Heading textAlign="center" textTransform="capitalize">
            New collections for you
          </Heading>
          <GridItem area={"Cta"}>
            <Cta copy="Show more" />
          </GridItem>
        </GridItem>

        <GridItem area={"Img1"}>
          <Image src={Img1} />
        </GridItem>

        <GridItem area={"Img2"}>
          <Image src={Img2} />
        </GridItem>

        <GridItem area={"Img3"} height="100%">
          <Image src={Img3} height="100%" objectFit="cover" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default NewCollection;
