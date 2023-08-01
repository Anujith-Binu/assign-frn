import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmoreComponent } from './findmore.component';

describe('FindmoreComponent', () => {
  let component: FindmoreComponent;
  let fixture: ComponentFixture<FindmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindmoreComponent]
    });
    fixture = TestBed.createComponent(FindmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
