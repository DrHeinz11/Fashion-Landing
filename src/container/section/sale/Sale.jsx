import {
  GridItem,
  Grid,
  Stack,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import Cta from "../../../components/Cta";
import Img1 from "./sana-discount-1.png";
import Img2 from "./mina-descount-2.png";
import Img3 from "./mina-discount3.png";

export default function Sale() {
  return (
    <Box margin={"auto"}>
      <Grid
        maxW="1000px"
        templateColumns={"repeat(2,1fr)"}
        templateRows={"2,1fr"}
        gap="15px"
        marginBlock={"50px"}
        marginInline={"auto"}
      >
        <GridItem>
          <Image
            src={Img1}
            width="sm"
            height={"md"}
            objectFit="cover"
            objectPosition={"top"}
            margin="auto"
          />
        </GridItem>
        <GridItem>
          <Stack>
            <Text textTransform="uppercase" fontWeight="300">
              discount amount of the week
            </Text>
            <Heading
              fontSize={{ base: "3rem",md:'4.5rem', lg: "4.5rem" }}
              textTransform="capitalize"
            >
              get a discount of now
            </Heading>
            <Text fontSize={{ base:'.85rem', lg:'1.15rem'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              asperiores tempore architecto,Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Distinctio.
            </Text>
            <Cta copy={"Get more"} />
          </Stack>
        </GridItem>
        <GridItem>
          {" "}
          <Image
            src={Img2}
            width="sm"
            height={"md"}
            objectFit="cover"
            objectPosition={"top"}
            margin="auto"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            src={Img3}
            width="sm"
            height={"md"}
            objectFit="cover"
            objectPosition={"top"}
            margin="auto"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
