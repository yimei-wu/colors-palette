import { useEffect, useState } from "react";
import switchColorProfile from "./SwitchColorProfile";
// import ColorPicker from "./ColorPicker";

const hexValidateInput = /^[#]?[a-fA-F0-9]{6}$/i;

const hslValidateInput =
  /^(hsl\(\s*)?(\(\s*)?\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*(\)\s*)?$/;

const rgbValidateInput = /^(rgb\s*)?(\([^)]*\)|[0-9]+(?:,\s*[0-9]+){2})$/;

const Form = ({
  setPalette,
  setUserColor,
  setColorModeInput,
  colorModeInput,
  userColor,
}) => {
  const [regex, setRegex] = useState(null);

  const switchRegexForColorMode = (colorMode) => {
    switch (colorMode) {
      case "hex":
        setColorModeInput("hex");
        setRegex(hexValidateInput);
        break;
      case "hsl":
        setColorModeInput("hsl");
        setRegex(hslValidateInput);
        break;
      case "rgb":
        setColorModeInput("rgb");
        setRegex(rgbValidateInput);
        break;
      default:
        setRegex(null);
        break;
    }
  };

  useEffect(() => {
    switchRegexForColorMode("hex");
  }, [colorModeInput]);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const baseColorMode =
      ev.target.baseColor.options[ev.target.baseColor.selectedIndex].value;
    const color = ev.target.color.value;

    const schemeMode =
      ev.target.mode.options[ev.target.mode.selectedIndex].value;
    const count = ev.target.count.value;

    await fetch(
      `https://www.thecolorapi.com/scheme?${baseColorMode}=${color.replace(
        "#",
        ""
      )}&format=json&mode=${schemeMode}&count=${count}`,

      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUserColor(color);

        let newPalette = [
          switchColorProfile(baseColorMode, color),
          ...data.colors,
        ];
        setPalette(newPalette);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)} className="form">
      <fieldset>
        <legend>Base color</legend>

        <select
          name="baseColor"
          id="baseColor"
          onChange={(ev) => {
            switchRegexForColorMode(ev.target.value);
          }}
        >
          <option value="hex" defaultValue>
            hex
          </option>
          <option value="hsl">hsl</option>
          <option value="rgb">rgb</option>
        </select>
        <input
          type="text"
          name="color"
          id="color"
          value={userColor}
          pattern={regex ? regex.source : ""}
          onChange={(e) => setUserColor(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <legend>Choose a scheme mode</legend>
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
      </fieldset>

      <fieldset>
        <legend>How many colors do you need beyond your one?</legend>

        <input name="count" id="count" type="number" min={2} max={6} required />
      </fieldset>

      <input type="submit" value="Generates" className="generate" />
    </form>
  );
};

export default Form;
