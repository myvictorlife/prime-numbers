import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment } from '../../../store/store';
import calculatePrimeArray from '../../../util/prime-numbers'
@Component({
  selector: 'app-start-sections',
  templateUrl: './start-sections.component.html',
  styleUrls: ['./start-sections.component.scss']
})
export class StartSectionsComponent implements OnInit {

  public counter$: Observable<any>;
  sumOfFoundPrimes = 0;

  // ******************************
  index = 1000;
  arrayLastPrimeNumber = 1000;
  primeNumberFound;

  controlPrimeNumbers = {
    calculationTime: null,
    sumOfFoundPrimes: 0,
    primesNumberFound: [],
    notifications: []
  };
  // ******************************

  constructor(private store: Store<{ counterReducer: number }>) { }

  ngOnInit(): void {
    console.log(this.store)
    this.counter$ = this.store.pipe(
      select('counterReducer')
    );
    this.calculate();
  }

  startCalculation() {
    this.store.dispatch(increment());
    this.calculate();
  }





  calculate() {
    let index = 1000;
    let array = [];

    while(true) {
      array = calculatePrimeArray(index);
      const last1000Prime = array[this.arrayLastPrimeNumber - 1];

      if (last1000Prime) {
        break;
      }
      index += index;
    }

    this.sumOfFoundPrimes = array.reduce((sum, value) => sum + value, 0);
    this.primeNumberFound = array[this.arrayLastPrimeNumber - 1];
    this.arrayLastPrimeNumber += 1000;

    this.controlPrimeNumbers.sumOfFoundPrimes = this.sumOfFoundPrimes;
    this.controlPrimeNumbers.primesNumberFound.push(this.primeNumberFound);
    this.controlPrimeNumbers.notifications.push(`Prime ${this.primeNumberFound} was found after 00:00:00`);
  }

}
