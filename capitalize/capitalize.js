export function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const rest = word.slice(1);

  return firstLetter + rest;
}
