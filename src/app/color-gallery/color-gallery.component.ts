import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

interface ColorTile {
  title: string;
  hex: string;
  description: string;
}

@Component({
  selector: 'app-color-gallery',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './color-gallery.component.html',
  standalone: true,
  styleUrl: './color-gallery.component.css'
})
export class ColorGalleryComponent {
  filterText: string = '';

  colors: ColorTile[] = [
    // order by title
    // sources: https://color-register.org/
    {title: 'Bright Sky Blue', hex: '#02CCFE', description: ''},
    {title: 'Crimson Red', hex: '#990000', description: ''},
    {title: 'Dark Sky Blue', hex: '#8CBED6', description: ''},
    {title: 'Falu Red', hex: '#801818', description: ''},
    {title: 'Forest Green', hex: '#014421', description: ''},
    {title: 'Sky Blue', hex: '#87CEEB', description: ''},
    {title: 'Sunflower Yellow', hex: '#FFDA03', description: ''},

  ];

  get filteredColors(): ColorTile[] {
    return this.colors.filter(c =>
      c.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
      c.hex.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
