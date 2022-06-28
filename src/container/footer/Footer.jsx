import { Stack, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import Logo from "../../components/Logo";
export default function Footer() {
  return (
    <Stack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingInline={{ lg: "20px", base: "0px" }}
      flexDirection="row"
      gap={"25px"}
      backgroundColor="#242424"
      p={"25px"}
    >
      <Logo />
      <Stack flexDirection="column" gap="10px">
        <Heading fontSize='xl' color='white'>Contact</Heading>
        <Text fontSize={'md'} color='white'>+54 1122445568</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Stack>
      <Stack>
        <Heading fontSize='xl' color='white'>Newsletter</Heading>
        <Stack spacing={"3"} display="flex" flex-direction="row">
          <Input
            variant="filled"
            placeholder="Enter your email address"
            size="md"
            borderRadius="0px"
          />
          <Button
            bg="black"
            color="white"
            variant="solid"
            borderRadius="0"
            _hover={{ color: "black", bg: "white", transition: "500ms" }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
