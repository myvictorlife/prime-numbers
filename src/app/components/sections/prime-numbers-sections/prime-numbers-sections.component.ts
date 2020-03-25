import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PrimeNumbers } from '../../../store/model/prime-numbers';
@Component({
  selector: 'app-prime-numbers-sections',
  templateUrl: './prime-numbers-sections.component.html',
  styleUrls: ['./prime-numbers-sections.component.scss']
})
export class PrimeNumbersSectionsComponent implements OnInit {

  controlPrimeNumbers$;
  primeNumberSelected: any = undefined;

  constructor(private store: Store<{ calculationReducer: PrimeNumbers }>) { }

  ngOnInit(): void {
    this.controlPrimeNumbers$ = this.store.pipe(
      select('calculationReducer')
    );
  }

  selectPrimeNumber(primeNumber) {
    if (this.primeNumberSelected && this.primeNumberSelected.primesNumber === primeNumber.primesNumber){
      this.primeNumberSelected = null;
    } else {
      this.primeNumberSelected = primeNumber;
    }
  }

}
