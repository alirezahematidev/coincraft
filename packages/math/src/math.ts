import { Decimal } from "decimal.js";

function add(x: number, y: number) {
  return Decimal.add(x, y).toNumber();
}

function multiply(x: number, y: number) {
  return Decimal.mul(x, y).toNumber();
}

function substract(x: number, y: number) {
  return Decimal.sub(x, y).toNumber();
}

function divide(x: number, y: number) {
  return Decimal.div(x, y).toNumber();
}

export { add, multiply, divide, substract };
