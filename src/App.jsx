import { useState } from "react";
import ColorsPalette from "./components/ColorsPalette";
import "./App.css";

function App() {
  const [colors, setColors] = useState([
    "#22223B",
    "#4A4E69",
    "#9A8C98",
    "#C9ADA7",
    "#F2E9E4",
  ]);

  const updateAllColors = () => {
    const newColors = colors.map((color) => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    setColors(newColors);
  };

  return (
    <div className="App">
      <h1>Colors Palette</h1>
      <ColorsPalette colors={colors} />
      <button onClick={updateAllColors}>Update All Colors</button>
    </div>
  );
}
export default App;
