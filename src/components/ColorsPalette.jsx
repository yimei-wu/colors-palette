const ColorsPalette = ({ palette }) => {
  return (
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
  );
};

export default ColorsPalette;
