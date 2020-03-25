import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PrimeNumbers } from '../../../store/model/prime-numbers';
@Component({
  selector: 'app-notifications-sections',
  templateUrl: './notifications-sections.component.html',
  styleUrls: ['./notifications-sections.component.scss']
})
export class NotificationsSectionsComponent implements OnInit {

  controlPrimeNumbers$;

  constructor(private store: Store<{ calculationReducer: PrimeNumbers }>) { }

  ngOnInit(): void {
    this.controlPrimeNumbers$ = this.store.pipe(
      select('calculationReducer')
    );
  }

}
