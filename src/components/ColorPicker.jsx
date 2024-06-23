import { useState } from "react";
import { Sketch } from "@uiw/react-color";

const ColorPicker = ({ userColor, setUserColor, colorModeInput }) => {
  const handleColorChange = (color) => {
    let newColor;
    switch (colorModeInput) {
      case "hex":
        newColor = color.hex;
        break;
      case "hsl":
        newColor =
          color.hsl.h.toFixed(0) +
          ", " +
          color.hsl.s.toFixed(0) +
          "%" +
          ", " +
          color.hsl.l.toFixed(0) +
          "%";
        break;
      case "rgb":
        newColor = color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b;
        break;
      default:
        newColor = color.hex;
        break;
    }
    setUserColor(newColor);
  };

  return (
    <Sketch
      className="color-picker-container"
      // style={{ marginLeft: 20 }}
      color={userColor}
      onChange={handleColorChange}
    />
  );
};
export default ColorPicker;
