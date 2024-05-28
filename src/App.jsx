import { useState, useEffect } from "react";
import ColorsPalette from "./components/ColorsPalette";
import "./App.css";
import Form from "./components/Form";

function App() {
  // const [colors, setColors] = useState([
  //   "#22223B",
  //   "#4A4E69",
  //   "#9A8C98",
  //   "#C9ADA7",
  //   "#F2E9E4",
  // ]);

  const [color, setColor] = useState([]);

  useEffect(() => {
    fetch("https://www.thecolorapi.com/id?hex=c9ada7")
      .then((response) => response.json())
      .then((data) => {
        setColor([data.hex.value]);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // const [selectedColorId, setSelectedColorId] = useState([""]);

  // <input
  //   type="color"
  //   value={selectedColorId}
  //   onChange={(e) => setSelectedColorId(e.target.value)}
  //   placeholder="Inserisci l'ID del colore"
  // />;

  // useEffect(() => {
  //   if (selectedColorId) {
  //     fetch(`https://www.thecolorapi.com/id?${selectedColorId}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setSelectedColorId([data.color.hex]);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }
  // }, [selectedColorId]);

  const updateColorsPalette = () => {
    const newColors = color.map((color) => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    setColor(newColors);
  };

  return (
    <div className="App">
      {/* <h1>Colors Palette</h1>
      <ColorsPalette colors={color} />
      <button onClick={updateColorsPalette}>New Palette</button> */}
      <Form />
    </div>
  );
}
export default App;
