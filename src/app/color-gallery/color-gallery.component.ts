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

    // {title: '', hex: '', description: ''},
    // {title: '', hex: '', description: ''},
    // {title: '', hex: '', description: ''},



    {title: 'Bright Sky Blue', hex: '#02CCFE', description: ''},
    {title: 'Brilliant Vermilion', hex: '#E77751', description: ''},
    {title: 'Crimson Red', hex: '#990000', description: ''},
    {title: 'Dark Grayish Vermilion', hex: '#594842', description: ''},
    {title: 'Dark Sky Blue', hex: '#8CBED6', description: ''},
    {title: 'Dark Vermilion', hex: '#593427', description: ''},
    {title: 'Day Sky Blue', hex: '#82CAFF', description: ''},
    {title: 'Deep Sky Blue', hex: '#00BFFF', description: ''},
    {title: 'Deep Vermilion', hex: '#591600', description: ''},
    {title: 'Dodger Blue', hex: '#1E90FF', description: ''},
    {title: 'Dodgers Blue', hex: '#005A9C', description: ''},
    {title: 'Dreamer’s Sky', hex: '#ADDED9', description: ''},
    {title: 'Dusky Blue', hex: '#475F94', description: ''},
    {title: 'Dusky Pink', hex: '#CC7A8B', description: ''},
    {title: 'Dusky Purple', hex: '#895B7B', description: ''},
    {title: 'Dusky Rose', hex: '#BA6873', description: ''},
    {title: 'Falu Red', hex: '#801818', description: ''},
    {title: 'Fanta Orange', hex: '#FF8300', description: ''},
    {title: 'Filmpro Sky Blue', hex: '#355D90', description: ''},
    {title: 'Forest Green', hex: '#014421', description: ''},
    {title: 'French Sky Blue', hex: '#77B5FE', description: ''},
    {title: 'Grayish Vermilion', hex: '#A8887D', description: ''},
    {title: 'Kandinsky', hex: '#C3D8BD', description: ''},
    {title: 'LALITHA\'S SKY', hex: '#34B6EA', description: ''},
    {title: 'Leaf', hex: '#71AA34', description: ''},
    {title: 'Light Brilliant Vermilion', hex: '#FF8B65', description: ''},
    {title: 'Light Sky Blue', hex: '#87CEFA', description: ''},
    {title: 'Light Vermilion', hex: '#E7A28B', description: ''},
    {title: 'Medium Sky Blue', hex: '#80DAEB', description: ''},
    {title: 'Medium Vermilion', hex: '#D9603B', description: ''},
    {title: 'Moderate Vermilion', hex: '#A8614A', description: ''},
    {title: 'Pale Light Grayish Vermilion', hex: '#E7C4B8', description: ''},
    {title: 'Pale Sky', hex: '#636D70', description: ''},
    {title: 'Pale Sky Blue', hex: '#BDF6FE', description: ''},
    {title: 'Pale Vermilion', hex: '#FFD1C2', description: ''},
    {title: 'Palm Beach Sky', hex: '#7AE2F0', description: ''},
    {title: 'Pastel Sky', hex: '#BEDDF1', description: ''},
    {title: 'Pastel Sky Blue', hex: '#B4D9EF', description: ''},
    {title: 'Polished Brown', hex: '#985538', description: ''},
    {title: 'Polished Pine', hex: '#5DA493', description: ''},
    {title: 'Rich Sky Blue', hex: '#528CD3', description: ''},
    {title: 'Rose Madder', hex: '#E32636', description: ''},
    {title: 'Sky', hex: '#82CAFC', description: ''},
    {title: 'Sky Blue', hex: '#87CEEB', description: ''},
    {title: 'Sky Magenta', hex: '#CF71AF', description: ''},
    {title: 'Skydiver', hex: '#4677C8', description: ''},
    {title: 'Skywater', hex: '#404653', description: ''},
    {title: 'Soft Sky Blue', hex: '#C1F1FF', description: ''},
    {title: 'Spring Sky', hex: '#3FB8F1', description: ''},
    {title: 'Strong Vermilion', hex: '#A82A00', description: ''},
    {title: 'Summer Sky', hex: '#38B0DE', description: ''},
    {title: 'Sunflower Yellow', hex: '#FFDA03', description: ''},
    {title: 'Sunset', hex: '#C0514A', description: ''},
    {title: 'Sunset Orange', hex: '#FD5E53', description: ''},
    {title: 'Sunset Pink', hex: '#D48ECD', description: ''},
    {title: 'Sunset Yellow', hex: '#FFC922', description: ''},
    {title: 'Vermilion', hex: '#E34234', description: ''},
    {title: 'Very Light Vermilion', hex: '#FFB69E', description: ''},
    {title: 'Very Pale Vermilion', hex: '#FFE9E2', description: ''},
    {title: 'Viva Magenta', hex: '#BE3455', description: 'Colour of Pantone 2023'},
    {title: 'Vivid Sky Blue', hex: '#00CCFF', description: ''},
    {title: 'Vivid Vermilion', hex: '#E56024', description: ''},
    {title: 'Winter Sky', hex: '#FF007C', description: ''},

  ];

  get filteredColors(): ColorTile[] {
    return this.colors.filter(c =>
      c.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
      c.hex.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
