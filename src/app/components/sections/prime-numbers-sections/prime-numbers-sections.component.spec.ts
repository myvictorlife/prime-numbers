import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersSectionsComponent } from './prime-numbers-sections.component';
import { reducer as calculationReducer } from '../../../store/reducers/calculation.reducer';
import { StoreModule } from '@ngrx/store';

describe('PrimeNumbersSectionsComponent', () => {
  let component: PrimeNumbersSectionsComponent;
  let fixture: ComponentFixture<PrimeNumbersSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNumbersSectionsComponent ],
      imports: [
        StoreModule.forRoot({
          calculationReducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNumbersSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
