function ValidateInput() {
  const [isValid, setIsValid] = useState(true);

  switch (colorType) {
    case "hex":
      setIsValid(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/.test());
    case "rgb":
      setIsValid(
        /^rgb\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test()
      );
    case "hsl":
      setIsValid(
        /^hsl\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test()
      );
    default:
      setIsValid(true);
  }
}

export default ValidateInput;
