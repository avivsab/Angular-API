import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsImagesComponent } from './dogs-images.component';

describe('DogsImagesComponent', () => {
  let component: DogsImagesComponent;
  let fixture: ComponentFixture<DogsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
