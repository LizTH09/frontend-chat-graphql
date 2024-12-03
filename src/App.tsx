import { Box } from "@mui/material";
import IndexRoutes from "./routes";

const App = () => {

  return (
    <Box  display="flex" alignItems="center" justifyContent="center" gap={2} height="100vh" width="100vw">
      <IndexRoutes/>
    </Box>
  );
};

export default App;
