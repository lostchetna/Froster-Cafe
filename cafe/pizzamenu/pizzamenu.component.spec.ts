import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzamenuComponent } from './pizzamenu.component';

describe('PizzamenuComponent', () => {
  let component: PizzamenuComponent;
  let fixture: ComponentFixture<PizzamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
