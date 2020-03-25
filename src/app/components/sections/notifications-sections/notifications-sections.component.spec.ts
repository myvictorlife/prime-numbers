import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSectionsComponent } from './notifications-sections.component';
import { reducer as calculationReducer } from '../../../store/reducers/calculation.reducer';
import { StoreModule } from '@ngrx/store';

describe('NotificationsSectionsComponent', () => {
  let component: NotificationsSectionsComponent;
  let fixture: ComponentFixture<NotificationsSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsSectionsComponent ],
      imports: [
        StoreModule.forRoot({
          calculationReducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
