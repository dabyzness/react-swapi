const baseURL = "https://swapi.dev/";

export async function getAllStarships(pageNum) {
  const res = await fetch(`${baseURL}api/starships/?page=${pageNum}`);
  return res.json();
}
