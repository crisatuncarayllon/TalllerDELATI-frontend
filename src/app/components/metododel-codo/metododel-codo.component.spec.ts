import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetododelCodoComponent } from './metododel-codo.component';

describe('MetododelCodoComponent', () => {
  let component: MetododelCodoComponent;
  let fixture: ComponentFixture<MetododelCodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetododelCodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetododelCodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
