import  { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <img src={item.image} alt={item.title} width="100" />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
