import { useState } from "react";
import { Sketch } from "@uiw/react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffff");
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={color}
      onChange={(color) => {
        console.log(color);
      }}
    />
  );
};

export default ColorPicker;
