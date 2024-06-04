const switchColorProfile = (baseColorMode, baseColor) => {
  switch (baseColorMode) {
    case "hex":
      baseColor = baseColor.replace("#", "");
      return { hex: { value: "#" + baseColor } };
    case "hsl":
      baseColor = baseColor.replace(/([hsl%]|\(|\))/g, "").split(",");
      return {
        hsl: {
          value:
            "hsl(" +
            baseColor[0] +
            ", " +
            baseColor[1] +
            "%, " +
            baseColor[2] +
            "%)",
        },
      };
    case "rgb":
      baseColor = baseColor.replace(/([rgb]|\(|\))/g, "");
      return { rgb: { value: "rgb(" + baseColor + ")" } };
    default:
      break;
  }
};

export default switchColorProfile;
