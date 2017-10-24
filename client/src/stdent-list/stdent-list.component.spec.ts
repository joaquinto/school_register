import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdentListComponent } from './stdent-list.component';

describe('StdentListComponent', () => {
  let component: StdentListComponent;
  let fixture: ComponentFixture<StdentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
