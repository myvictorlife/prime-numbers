import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { calculation } from '../../../store/actions/calculation.actions';
@Component({
  selector: 'app-start-sections',
  templateUrl: './start-sections.component.html',
  styleUrls: ['./start-sections.component.scss']
})
export class StartSectionsComponent implements OnInit {

  controlPrimeNumbers$;

  constructor(private store: Store<{ counterReducer: number }>) { }

  ngOnInit(): void {
    this.controlPrimeNumbers$ = this.store.pipe(
      select('counterReducer')
    );
  }

  startCalculation() {
    this.store.dispatch(calculation());

  }

}
