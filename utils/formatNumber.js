export default function formatNumber(num) {
  let result = "";
  let count = 0;
  const numToString = `${num}`;

  for (let i = numToString.length - 1; i >= 0; i--) {
    result = numToString[i] + result;
    count += 1;

    if (i > 0 && count === 3) {
      result = "," + result;
      count = 0;
    }
  }

  return result;
}
