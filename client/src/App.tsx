import Calculator from "./Components/Calculator";
import Nav from "./Components/Nav";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <Nav />
        </GridItem>

        <GridItem area="main">
          <Calculator />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
