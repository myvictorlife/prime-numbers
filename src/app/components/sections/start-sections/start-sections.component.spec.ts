import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSectionsComponent } from './start-sections.component';

describe('StartSectionsComponent', () => {
  let component: StartSectionsComponent;
  let fixture: ComponentFixture<StartSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSectionsComponent ]
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
