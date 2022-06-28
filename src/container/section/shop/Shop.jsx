import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import Galery from "./Galery";
export default function Shop() {
  return (
    <Box margin="50px auto">
      <Stack
        flexDirection="column"
        gap={"15px"}
        maxWidth="1000px"
        margin={{ lg: "50px auto", base: "0 auto" }}
      >
        <Box display="flex" gap="15px" flexDirection="column">
          <Text textAlign="center" fontWeight="300" textTransform="uppercase">
            our collection
          </Text>
          <Heading textAlign="center" textTransform="capitalize">
            this collection that's might your also like
          </Heading>
        </Box>

        <Galery />
      </Stack>{" "}
    </Box>
  );
}
