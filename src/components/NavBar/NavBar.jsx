import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header" style={{ height: "60px" }}>
      <Link to="/starship-list">Starship List</Link>
    </header>
  );
};

export default NavBar;
