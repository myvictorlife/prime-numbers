import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { calculation } from '../../../store/actions/calculation.actions';
import { PrimeNumbers } from '../../../store/model/prime-numbers';

@Component({
  selector: 'app-start-sections',
  templateUrl: './start-sections.component.html',
  styleUrls: ['./start-sections.component.scss']
})
export class StartSectionsComponent implements OnInit {

  controlPrimeNumbers$;

  constructor(private store: Store<{ calculationReducer: PrimeNumbers }>) { }

  ngOnInit(): void {
    this.controlPrimeNumbers$ = this.store.pipe(
      select('calculationReducer')
    );
  }

  startCalculation() {
    this.store.dispatch(calculation());
  }

}
