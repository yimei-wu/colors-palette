const ColorsPalette = ({ palette, seedColor }) => {
  return (
    <>
      <div className="color-palette">
        {seedColor && (
          <div
            className="color-block"
            style={{ backgroundColor: "#" + seedColor }}
          >
            <p className="color-code">{seedColor}</p>
          </div>
        )}
      </div>

      <div className="color-palette">
        {palette.length > 0 && (
          <>
            {palette.map((color, index) => (
              <div
                key={index}
                className="color-block"
                style={{ backgroundColor: color.hex.value }}
              >
                <p className="color-code">{color.hex.value}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ColorsPalette;
