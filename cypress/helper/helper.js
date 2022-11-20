function getRandomNumber() {
  const randomNumber = Math.floor((Math.random() * 1000000) + 1);
  return randomNumber;
}

module.exports = { getRandomNumber };
