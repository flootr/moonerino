export function subtract(a: number, b: number) {
  return a - b;
}

export function add(a: number, b: number) {
  return a + b;
}

export function sum(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}
