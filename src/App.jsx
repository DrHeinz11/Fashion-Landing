import Header from "./container/header/Header";
import Section from "./container/section/Section";
import { Stack } from "@chakra-ui/react";
function App() {
  return (
    <Stack maxW="1200px" margin="auto">
      <Header />
      <Section />
    </Stack>
  );
}

export default App;
