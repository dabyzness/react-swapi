import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import StarshipList from "./pages/StarshipList/StarshipList";
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starship-list" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
