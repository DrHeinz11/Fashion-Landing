import { Box, Stack, Text, Heading } from "@chakra-ui/react";

export default function Card() {
  return (
    <Box bg="gray.300" boxShadow="md">
      <Stack flexDirection="column" gap="10px" w="50%" alignItems="start">
        <Text textTransform="capitalize" color="blackAlpha.700">
          sana x prada
        </Text>
        <Heading textTransform="capitalize"> green ulz dress</Heading>
        <Text color="blackAlpha.700">$599</Text>
      </Stack>
    </Box>
  );
}
