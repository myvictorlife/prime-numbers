

interface ControlPrimeNumbers {
  calculationTime: string;
  sumOfFoundPrimes: number;
  primesNumberFound: Array<any>;
}

export interface PrimeNumbers {
  controlPrimeNumbers: ControlPrimeNumbers;
  notifications: Array<string>;
}
