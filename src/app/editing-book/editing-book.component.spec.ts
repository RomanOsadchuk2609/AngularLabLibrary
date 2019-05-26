import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingBookComponent } from './editing-book.component';

describe('EditingBookComponent', () => {
  let component: EditingBookComponent;
  let fixture: ComponentFixture<EditingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
