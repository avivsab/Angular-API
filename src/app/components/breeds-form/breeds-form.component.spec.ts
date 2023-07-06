import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsFormComponent } from './breeds-form.component';

describe('BreedsFormComponent', () => {
  let component: BreedsFormComponent;
  let fixture: ComponentFixture<BreedsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
