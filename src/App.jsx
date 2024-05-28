import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [palette, setPalette] = useState([]);

  console.log(palette);
  return (
    <div className="App">
      <Form setPalette={setPalette} />
      <div className="palette-container">
        {palette.length > 0 && (
          <>
            {palette.map((color, index) => {
              return (
                <div key={index}>
                  <h1>draw the color</h1>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
export default App;
