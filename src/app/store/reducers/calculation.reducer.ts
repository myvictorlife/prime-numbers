import { Action } from '@ngrx/store';
import primeNumberGenerator from '../../util/prime-number-generator';
import { PrimeNumbers } from '../model/prime-numbers';
import dateConversion from '../../util/date-conversion';

const INITIAL_STATE = {
  controlPrimeNumbers: {
    calculationTime: '',
    sumOfFoundPrimes: 0,
    primesNumberFound: []
  },
  notifications: []
};

const featureReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_CALCULATION':

      const beforeRunPrimeNumber = new Date();
      const object = primeNumberGenerator();
      const afterRunPrimeNumber = new Date();

      const sumOfFoundPrimes = object.sumOfFoundPrimes;
      const calculationTime = dateConversion(beforeRunPrimeNumber, afterRunPrimeNumber);

      const primesNumberFound = state.controlPrimeNumbers.primesNumberFound.concat({
        startDate: beforeRunPrimeNumber,
        primesNumber: object.primesNumberFound,
        endDate: afterRunPrimeNumber,
        calculationTime
      });

      const notifications = state.notifications.concat(`Prime ${object.primesNumberFound} was found after ${calculationTime}`);

      return {
        ...state,
        controlPrimeNumbers: {
          calculationTime,
          sumOfFoundPrimes,
          primesNumberFound
        },
        notifications
      };
      break;
    default:
     return {
       ... state
     };
  }
};

export function reducer(state, action: Action): PrimeNumbers {
  return featureReducer(state, action);
}
