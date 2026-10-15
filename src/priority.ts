export const isValidPriority = (value: number): boolean => {
  return Number.isInteger(value) && value >= 1 && value <= 3;
}