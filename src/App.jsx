import { useState } from "react";
import Form from "./components/Form";
import ColorsPalette from "./components/ColorsPalette";
import "./App.css";

function App() {
  const [palette, setPalette] = useState([]);
  const [seedColor, setSeedColor] = useState(null);
  return (
    <div className="App">
      <h1>Colors Palette</h1>
      <Form setPalette={setPalette} setSeedColor={setSeedColor} />
      <ColorsPalette palette={palette} seedColor={seedColor} />
    </div>
  );
}
export default App;
