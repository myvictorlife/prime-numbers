import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment } from '../../../store/store';
@Component({
  selector: 'app-start-sections',
  templateUrl: './start-sections.component.html',
  styleUrls: ['./start-sections.component.scss']
})
export class StartSectionsComponent implements OnInit {

  public counter$: Observable<any>;

  constructor(private store: Store<{ counterReducer: number }>) { }

  ngOnInit(): void {
    console.log(this.store)
    this.counter$ = this.store.pipe(
      select('counterReducer')
    );
  }

  startCalculation() {
    this.store.dispatch(increment());
  }

}
