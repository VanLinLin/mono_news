import "./App.css";
import Card from "../components/Card";

const texts = ["左眼", "中眼", "右眼"];

function App() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDdirection: "column",
      }}
    >
      {texts.map((text) => (
        <Card key={text} content={text} />
      ))}
    </div>
  );
}

export default App;
