import { Action } from '@ngrx/store';
import primeNumberGenerator from '../../util/prime-number-generator';

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

      const object = primeNumberGenerator();
      const sumOfFoundPrimes = object.sumOfFoundPrimes;
      const primesNumberFound = state.controlPrimeNumbers.primesNumberFound.concat(object.primesNumberFound);

      return {
        ...state,
        controlPrimeNumbers: {
          calculationTime: '',
          sumOfFoundPrimes,
          primesNumberFound
        }
      }
      break;
    default:
     return {
       ... state
     };
  }
  return state;
}

export function reducer(state, action: Action) {
  return featureReducer(state, action);
}
