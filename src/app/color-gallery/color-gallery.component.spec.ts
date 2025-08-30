import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGalleryComponent } from './color-gallery.component';

describe('ColorGalleryComponent', () => {
  let component: ColorGalleryComponent;
  let fixture: ComponentFixture<ColorGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
