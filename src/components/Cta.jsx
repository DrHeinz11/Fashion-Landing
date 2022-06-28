import { Button, Icon } from "@chakra-ui/react";
const Cta = ({ copy }) => {
  return (
    <Button
      bg={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      borderRadius={"3xl"}
      textTransform={"capitalize"}
      textAlign="center"
      w={'3xs'}
      fontSize='sm'
      _hover={{}}
    >
      {copy}
    </Button>
  );
};

export default Cta;
