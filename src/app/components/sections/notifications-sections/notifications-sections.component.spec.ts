import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSectionsComponent } from './notifications-sections.component';

describe('NotificationsSectionsComponent', () => {
  let component: NotificationsSectionsComponent;
  let fixture: ComponentFixture<NotificationsSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsSectionsComponent ]
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
