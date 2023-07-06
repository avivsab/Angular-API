import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dogs-images',
  templateUrl: './dogs-images.component.html',
  styleUrls: ['./dogs-images.component.css']
})
export class DogsImagesComponent {
  @Input() filteredImages: string[] = [];
}
