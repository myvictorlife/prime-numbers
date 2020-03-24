import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersSectionsComponent } from './prime-numbers-sections.component';

describe('PrimeNumbersSectionsComponent', () => {
  let component: PrimeNumbersSectionsComponent;
  let fixture: ComponentFixture<PrimeNumbersSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNumbersSectionsComponent ]
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
