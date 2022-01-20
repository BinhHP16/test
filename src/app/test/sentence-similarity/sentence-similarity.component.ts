import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-similarity',
  templateUrl: './sentence-similarity.component.html',
  styleUrls: ['./sentence-similarity.component.scss']
})
export class SentenceSimilarityComponent implements OnInit {

  constructor() { }

  cars=['car1', 'car2', 'car3'];
  ngOnInit(): void {
  }

}
