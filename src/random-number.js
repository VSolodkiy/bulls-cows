
const getRandomNumber = () => {
  const secretNumber ='0123456789'.split('')
  .sort(() => Math.random() - 0.5)
  .slice(0, 4)
  .join('');
  console.log(secretNumber);
  return secretNumber;
};

const win = (secret, digit) => {
  const compare = (secret === digit) ? true : false;
  return compare;
};

const bullsCows = (secret, digit) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < digit.length; i++) {
    const index = secret.indexOf(digit[i]);
      if (index === i) {
      bulls++
      } else if (index > -1) {
      cows++
    }
  }
  return {bulls, cows}
};

export {
  getRandomNumber,
  win,
  bullsCows,
}