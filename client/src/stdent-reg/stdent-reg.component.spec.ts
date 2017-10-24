import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdentRegComponent } from './stdent-reg.component';

describe('StdentRegComponent', () => {
  let component: StdentRegComponent;
  let fixture: ComponentFixture<StdentRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdentRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdentRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
