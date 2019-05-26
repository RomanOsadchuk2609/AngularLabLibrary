import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { LibraryMainComponent } from './library-main/library-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryMainComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
