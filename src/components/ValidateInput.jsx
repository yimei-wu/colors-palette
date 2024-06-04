function ValidateInput() {
  const [isValid, setIsValid] = useState(true);

  switch (colorType) {
    case "hex":
      setIsValid(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/.test());
      break;
    case "rgb":
      setIsValid(
        /^rgb\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test()
      );
      break;
    case "hsl":
      setIsValid(
        /^hsl\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test()
      );
      break;
    default:
      setIsValid(true);
      break;
  }
}

export default ValidateInput;
