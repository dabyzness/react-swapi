import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";

const StarshipDetails = (props) => {
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getStarshipDetails(location.state.starship.url);
      setDetails(data);
    };

    fetchDetails();
  }, []);

  return (
    <>
      <div>
        {details.name ? (
          <div style={{ textAlign: "center" }}>
            <h1>{details.name}</h1>
            <h2>{details.model}</h2>
            <h3>{details.manufacturer}</h3>

            <p>Cost: {details.cost_in_credits}</p>
          </div>
        ) : (
          <div>Is Loading</div>
        )}
      </div>
    </>
  );
};

export default StarshipDetails;
