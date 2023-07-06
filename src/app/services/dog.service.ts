import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { BreedResponse } from '../interfaces/Dogs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private mainAPI = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<string[]> {
    return this.http.get<BreedResponse>(this.mainAPI).pipe(
      map((response: BreedResponse) => Object.keys(response.message))
    );
  }

  filterBreeds(searchTerm: string, quantity: number): Observable<BreedResponse> {
    const url = `https://dog.ceo/api/breed/${searchTerm}/images/random/${quantity}`;
    return this.http.get<BreedResponse>(url);
  }
}
