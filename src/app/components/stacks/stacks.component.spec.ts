import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksComponent } from './stacks.component';

describe('StacksComponent', () => {
  let component: StacksComponent;
  let fixture: ComponentFixture<StacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StacksComponent]
    });
    fixture = TestBed.createComponent(StacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
