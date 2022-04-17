import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesmenuComponent } from './sidesmenu.component';

describe('SidesmenuComponent', () => {
  let component: SidesmenuComponent;
  let fixture: ComponentFixture<SidesmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidesmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
