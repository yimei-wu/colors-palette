const Form = ({ setPalette, setUserColor }) => {
  async function handleSubmit(ev) {
    ev.preventDefault();

    const baseColorMode =
      ev.target.baseColor.options[ev.target.baseColor.selectedIndex].value;
    const color = ev.target.color.value;

    const schemeMode =
      ev.target.mode.options[ev.target.mode.selectedIndex].value;
    const count = ev.target.count.value;

    await fetch(
      `https://www.thecolorapi.com/scheme?${baseColorMode}=${color}&format=json&mode=${schemeMode}&count=${count}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUserColor(color);
        let newPalette = [{ hex: { value: "#" + color } }, ...data.colors];
        setPalette(newPalette);
        console.log(data.colors, [
          ...data.colors,
          { hex: { value: "#" + color } },
        ]);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)} className="form">
      <fieldset>
        <legend>Base color</legend>
        <input type="text" name="color" id="color" required />
        <select name="baseColor" id="baseColor">
          <option value="hex" defaultValue>
            hex
          </option>
          <option value="cmyk">cmyk</option>
          <option value="hsl">hsl</option>
          <option value="rgb">rgb</option>
        </select>
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

      <input type="submit" value="Generates" />
    </form>
  );
};

export default Form;
