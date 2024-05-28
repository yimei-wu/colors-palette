import React from "react";

const Form = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const baseColorMode =
      ev.target.baseColor.options[ev.target.baseColor.selectedIndex].value;
    const color = ev.target.color.value;
    const schemeMode =
      ev.target.mode.options[ev.target.mode.selectedIndex].value;
    const count = ev.target.count.value;
    console.log(baseColorMode, color, schemeMode, count);
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)} className="form">
      <fieldset>
        <legend>Base color</legend>
        <select name="baseColor" id="baseColor">
          <option value="cmyk">cmyk</option>
          <option value="hsl">hsl</option>
          <option value="hex">hex</option>
          <option value="rgb" selected>
            rgb
          </option>
        </select>
        <input type="text" name="color" id="color" required />
      </fieldset>
      <label htmlFor="mode">Choose a scheme mode</label>
      <select name="mode" id="mode" required>
        <option value="monochrome">monochrome</option>
        <option value="monochrome-dark">monochrome-dark</option>
        <option value="monochrome-light">monochrome-light</option>
        <option value="analogic">analogic</option>
        <option value="complement">complement</option>
        <option value="analogic-complement">analogic-complement</option>
        <option value="triad">triad</option>
        <option value="quad">quad</option>
      </select>
      <label htmlFor="count">How many colors in the scheme</label>
      <input name="count" id="count" type="number" min={2} max={6} required />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
