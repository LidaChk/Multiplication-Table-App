export function getRandomInt(n: number, k: number): number {
    if (k < 0 || k >= n) {
      throw new Error("Invalid value for k");
    }

    const possibleValues = Array.from({ length: n - 1 }, (_, i) => i + 1);
    const filteredValues = possibleValues.filter((value) => value !== k);

    const randomIndex = Math.floor(Math.random() * filteredValues.length);
    return filteredValues[randomIndex];
  }
