//==NUMBER
function multiply(number1: number | string, number2: number): number | string {
  if (typeof number1 === "string") {
    return number1.repeat(number2);
  }
  return number1 * number2;
}

//==STRING
function repeatText(text: string | number, number: number): string {
  if (typeof text === "number") {
    text = String(text);
  }

  return text.repeat(number);
}
