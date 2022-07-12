import { useState, useEffect } from "react";
import "./App.css";
import Grid from "../components/Grid";

function App() {
  console.log("start");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data["data"]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map((item) => (
        <Grid key={item.title} item={item} />
      ))}
    </div>
  );
}

export default App;
