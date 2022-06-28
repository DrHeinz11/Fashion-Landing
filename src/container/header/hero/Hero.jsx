import Cta from "../../../components/Cta";
import { Star, Circles, GaleryHero } from "../../../components/export";
import { Heading, Stack, Box } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Stack>
      <Box
        marginTop="80px"
        display="flex"
        gap='15px'
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          fontSize={{ lg: "4rem", base: "3rem" }}
          textTransform="capitalize"
          textAlign="center"
        >
          Explore more <br /> fashion and collection
        </Heading>

        <Cta copy="Show more" />
      </Box>
      <GaleryHero />
    </Stack>
  );
}
