export function sortName(a, b) {
  const fa = a.toLowerCase(),
    fb = b.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
}
