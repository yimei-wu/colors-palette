import { useState } from "react";
import Form from "./components/Form";
import ColorsPalette from "./components/ColorsPalette";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [palette, setPalette] = useState([]);
  const [userColor, setUserColor] = useState("");

  return (
    <div className="App">
      <h1>Colors Palette</h1>
      <p>
        Progetto di generatore di palette colori che utilizza API per creare
        combinazioni cromatiche dinamiche e personalizzate
      </p>

      <Form setPalette={setPalette} setUserColor={setUserColor} />
      <ColorsPalette palette={palette} />
      <ColorPicker />
    </div>
  );
}
export default App;
