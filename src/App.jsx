import { useState } from "react";
import Form from "./components/Form";
import ColorsPalette from "./components/ColorsPalette";
import "./App.css";

function App() {
  const [palette, setPalette] = useState([]);
  return (
    <div className="App">
      <h1>Colors Palette</h1>
      <Form setPalette={setPalette} />
      <ColorsPalette palette={palette} />
    </div>
  );
}
export default App;
