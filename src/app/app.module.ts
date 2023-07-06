import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ValidationUtilsService} from './services/validation-utils.service';
import { BreedsFormComponent } from './components/breeds-form/breeds-form.component';
import { DogsImagesComponent } from './components/dogs-images/dogs-images.component';
@NgModule({
  declarations: [
    AppComponent,
    BreedsFormComponent,
    DogsImagesComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [ValidationUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
