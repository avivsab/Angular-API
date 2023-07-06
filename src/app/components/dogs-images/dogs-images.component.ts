import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dogs-images',
  templateUrl: './dogs-images.component.html',
  styleUrls: ['./dogs-images.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsImagesComponent {
  @Input() filteredImages: string[] = [];
}
