import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const StarshipList = (props) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let pageNum = 1;
      let morePages;

      const data = await getAllStarships(pageNum);

      setStarships(data.results);

      if (data.next !== null) {
        morePages = true;
        pageNum += 1;
      }

      while (morePages) {
        const moreData = await getAllStarships(pageNum);

        setStarships((starships) => [...starships, ...moreData.results]);

        if (moreData.next !== null) {
          pageNum += 1;
        } else {
          morePages = false;
        }
      }
    };

    fetchData();
  }, []);

  // Delete Copies
  // useEffect(() => {
  //   const copy = [...starships];
  //   const indexArr = [];

  //   copy.forEach(ship => {
  //     for(let i = 0; i < copy.length; i += 1){
  //       if(ship.equals(copy[i])){

  //       }
  //     }})
  // }, [starships]);

  return (
    <>
      <div>
        {starships.length ? (
          <ul>
            {starships.map((starship, i) => (
              <Link key={`starship-${i}`} state={{ starship }} to="/starship">
                <li>{starship.name}</li>
              </Link>
            ))}
          </ul>
        ) : (
          "I'm LOADING"
        )}
      </div>
    </>
  );
};

export default StarshipList;
