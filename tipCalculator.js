// Project done by myself

const tipCalculator = (quality, total) => {
  if (quality === 'bad') {
    return (total * 0.05)
  } else if (quality === 'ok') {
    return (total * 0.15)
  } else if (quality === 'good'){
    return (total * 0.20)
  } else if (quality === 'excellent') {
    return (total * 0.30)
  } else {
    return (total * 0.18)
  }
};

console.log(tipCalculator('excellent', 120)) //should return 36