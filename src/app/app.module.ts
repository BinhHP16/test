import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {HttpClientModule} from "@angular/common/http";
import {GlobalConfig, ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SentenceSimilarityComponent } from './test/sentence-similarity/sentence-similarity.component';
import { TrainSearchComponent } from './test/train-search/train-search.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceSimilarityComponent,
    TrainSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      newestOnTop: true,
      maxOpened: 1
    } as Partial<GlobalConfig>)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
