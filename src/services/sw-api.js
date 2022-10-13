const baseURL = "https://swapi.dev/";

export async function getAllStarships(pageNum) {
  const res = await fetch(`${baseURL}api/starships/?page=${pageNum}`);
  return res.json();
}

export async function getStarshipDetails(url) {
  const res = await fetch(url);
  return res.json();
}
