import "./App.css";
import Tourcard from "./Components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./Components/AppBar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ margin: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography variant="h4" marginTop={5} marginBottom={3}>
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => {
                  return <Tourcard tour={tour} key={index} />;
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
