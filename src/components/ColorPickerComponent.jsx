import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerComponent = () => {
  const picker = () => {
    const [colorPicker, setColorPicker] = useState("#fff");

    const chooseColor = (colorPicker) => {
      setColorPicker(colorPicker);
    };
  };
};

export default ColorPickerComponent;
