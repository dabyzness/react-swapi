import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import StarshipList from "./pages/starshipList/StarshipList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starship-list" element={<StarshipList />} />
      </Routes>
    </>
  );
}

export default App;
