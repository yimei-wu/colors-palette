const ColorsPalette = ({ colors }) => {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-block"
          style={{ backgroundColor: color }}
        >
          <p className="color-code">{color}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorsPalette;
