
import calculatePrimeArray from './prime-numbers';

/**
 * Prime Number Generator
 * Return array of 'totalPrimeNumbers' Prime Numbers
 */

let totalPrimeNumbers = 1000;
let arrayLastPrimeNumber = 1000;

const primeNumberGenerator = () => {

  let array = [];

  const controlPrimeNumbers = {
    sumOfFoundPrimes: 0,
    primesNumberFound: [],
    notifications: []
  };

  while (true) {
    array = calculatePrimeArray(totalPrimeNumbers);
    const last1000Prime = array[arrayLastPrimeNumber - 1];

    if (last1000Prime) {
      break;
    }
    totalPrimeNumbers += totalPrimeNumbers;
  }

  controlPrimeNumbers.sumOfFoundPrimes = array.reduce((sum, value) => sum + value, 0);
  controlPrimeNumbers.primesNumberFound = array[arrayLastPrimeNumber - 1];
  controlPrimeNumbers.notifications.push(`Prime ${array[arrayLastPrimeNumber - 1]} was found after 00:00:00`);

  arrayLastPrimeNumber += 1000;

  return controlPrimeNumbers;
};

export default primeNumberGenerator;
