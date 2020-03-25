
import calculatePrimeArray from './prime-numbers';

/**
 * Prime Number Generator - Start in 'totalPrimeNumbers'
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
    if (array[arrayLastPrimeNumber - 1]) {
      break;
    }
    totalPrimeNumbers += totalPrimeNumbers;
  }

  controlPrimeNumbers.sumOfFoundPrimes = array.reduce((sum, value) => sum + value, 0);
  controlPrimeNumbers.primesNumberFound = array[arrayLastPrimeNumber - 1];

  arrayLastPrimeNumber += 1000;

  return controlPrimeNumbers;
};

export default primeNumberGenerator;
