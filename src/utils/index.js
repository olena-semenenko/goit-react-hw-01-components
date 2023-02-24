export function getRandomHexColor() {
  const color =
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();

  return color;
}

export function showStatus(status) {
  if (status) {
    return 'rgb(124, 252, 0)';
  } else {
    return 'rgb(255, 0, 0)';
  }
}
