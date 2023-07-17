{
  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(command: Command, num1: number, num2: number): number {
    switch (command) {
      case "add":
        return num1 + num2;
        break;
      case "substract":
        return num1 - num2;
        break;
      case "multiply":
        return num1 * num2;
        break;
      case "divide":
        return num1 / num2;
        break;
      case "remainder":
        return num1 % num2;
        break;
      default:
        throw new Error("unknown Error");
    }
  }

  console.log(calculate("add", 1, 3));
  console.log(calculate("substract", 3, 1));

}
