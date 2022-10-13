import { useState, useEffect } from "react";
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
      <div>{starships.length ? starships.length : "I'm LOADING"}</div>
    </>
  );
};

export default StarshipList;
