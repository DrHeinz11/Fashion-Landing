import Header from "./container/header/Header";
import Section from "./container/section/Section";
import { Stack } from "@chakra-ui/react";
import Footer from "./container/footer/Footer";
function App() {
  return (
    <>
      <Stack maxW="1200px" margin="auto">
        <Header />
        <Section />
      </Stack>
      <Footer />
    </>
  );
}

export default App;
