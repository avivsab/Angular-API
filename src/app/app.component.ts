import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filteredImages: string[] = [];

  onSearchChange(searchResults: string[]): void {
    this.filteredImages = searchResults;
  }
}
