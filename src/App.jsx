import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import SharedComponent from "./components/SharedComponent";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <Box
      width={"400px"}
      sx={{ width: { xl: "1488px" }, overflow: "hidden" }}
      m="auto"
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<SharedComponent />}>
            <Route index element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
