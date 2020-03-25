import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-prime-numbers-sections',
  templateUrl: './prime-numbers-sections.component.html',
  styleUrls: ['./prime-numbers-sections.component.scss']
})
export class PrimeNumbersSectionsComponent implements OnInit {

  controlPrimeNumbers$;

  constructor(private store: Store<{ counterReducer: number }>) { }

  ngOnInit(): void {
    this.controlPrimeNumbers$ = this.store.pipe(
      select('counterReducer')
    );
  }

}
