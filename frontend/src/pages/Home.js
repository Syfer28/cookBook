import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes/")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return (
    <div>
      {data ? data.map((recipe) => <p>{recipe.title}</p>) : <p>Loading...</p>}
    </div>
  );
};

export default Home;
