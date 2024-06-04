const ColorsPalette = ({ palette }) => {
  const colorMode = palette.length > 0 ? Object.keys(palette[0])[0] : null;

  return (
    <div className="color-palette">
      {palette.length > 0 && (
        <>
          {palette.map((color, index) => {
            // console.log(color[colorMode]);
            return (
              <div
                key={index}
                className="color-block"
                style={{ backgroundColor: color[colorMode].value }}
              >
                <p className="color-code">{color[colorMode].value}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ColorsPalette;
