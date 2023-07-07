import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-breeds-form',
  templateUrl: './breeds-form.component.html',
  styleUrls: ['./breeds-form.component.css']
})
export class BreedsFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Output() searchChange = new EventEmitter<string[]>();
  @Output() quantityChange = new EventEmitter<string[]>();

  readonly imagesLimit: number = 50;

  searchForm: FormGroup;
  breeds: string[] = [];
  filteredBreeds: string[] = [];
  imagesAmount;

  constructor(private fb: FormBuilder, private dogService: DogService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
      quantity: ['', [Validators.min(1), Validators.max(50), Validators.pattern(/^\d+$/)]]
    });

    this.dogService.getBreeds().subscribe((breeds: string[]) => {
      this.breeds = breeds;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterBreeds(searchTerm: string) {
    this.filteredBreeds = this.breeds.filter(breed => breed.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  onInput(searchTerm: string) {
    this.searchForm.get('search').setValue(searchTerm);
    if (!this.breeds.includes(searchTerm)) {
      return;
    }
    if (this.searchForm.get('search').valid) {
      if (!(this.searchForm.get('quantity').value && this.searchForm.get('quantity').valid)) {
        this.imagesAmount = this.imagesLimit;
      }
      this.dogService.filterBreeds(searchTerm, parseInt(this.imagesAmount))
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((data: any) => {
          this.searchChange.emit(data.message);
          return of(null);
        }),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe();
    }
  }

  onNumInput(imgNumber: number) {
    if (this.isInvalid('quantity')) {
      return;
    }
    this.imagesAmount = imgNumber;
    this.onInput(this.searchForm.get('search').value);
  }

  isInvalid(controlName: string): boolean {
    const control = this.searchForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }
}
