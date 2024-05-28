import React from "react";

const Form = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("hello there");
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
        <input type="text" />
      </fieldset>
      <label htmlFor="mode">Choose a scheme mode</label>
      <select name="mode" id="mode">
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
      <input name="count" id="count" type="number" min={2} max={6} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
