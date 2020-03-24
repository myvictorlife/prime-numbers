import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { calculation } from '../../../store/actions/calculation.actions';

@Component({
  selector: 'app-start-sections',
  templateUrl: './start-sections.component.html',
  styleUrls: ['./start-sections.component.scss']
})
export class StartSectionsComponent implements OnInit {

  public counter$: Observable<any>;

  controlPrimeNumbers$;

  constructor(private store: Store<{ counterReducer: number }>) { }

  ngOnInit(): void { }

  startCalculation() {
    this.store.dispatch(calculation());
    this.controlPrimeNumbers$ = this.store.pipe(
      select('counterReducer')
    );
  }

}
