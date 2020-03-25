import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSectionsComponent } from './start-sections.component';
import { reducer as calculationReducer } from '../../../store/reducers/calculation.reducer';
import { StoreModule } from '@ngrx/store';

describe('StartSectionsComponent', () => {
  let component: StartSectionsComponent;
  let fixture: ComponentFixture<StartSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSectionsComponent ],
      imports: [
        StoreModule.forRoot({
          calculationReducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
