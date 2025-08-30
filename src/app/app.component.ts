import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ColorGalleryComponent} from './color-gallery/color-gallery.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorGalleryComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ColourGallery';
}
