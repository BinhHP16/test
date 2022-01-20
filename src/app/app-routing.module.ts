import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrainSearchComponent} from "./test/train-search/train-search.component";
import {SentenceSimilarityComponent} from "./test/sentence-similarity/sentence-similarity.component";
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path:"home", component: HomeComponent, children: [

    ]
  },
  {path:"test", component:TrainSearchComponent},
  {path:"test2", component:SentenceSimilarityComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
