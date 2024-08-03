import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/home/")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div>{data ? <p>{data.name}</p> : <p>Loading...</p>}</div>;
};

export default Home;
