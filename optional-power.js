function optionalPow(a, b) {
  const isSelectedAToPowerB = confirm(`Do you want to calcucalte ${a} to the power of ${b}?`);

  return isSelectedAToPowerB ? Math.pow(a, b) : Math.pow(b, a);
}
