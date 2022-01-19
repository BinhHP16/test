import { Component } from '@angular/core';
import {tokenizerService} from "./service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paraphrases: any[] | undefined ;
  constructor(private system: tokenizerService
              ) {
  }
  title = 'Test';
  uuid='fbdfjgdfkgvndf';
  // option=['option1', 'option2 ', 'option3'];
  selectedOption='option1';
  formModel: any = {};


  options = [
    { id: 1, name: 'option1' },
    { id: 2, name: 'option2' },
    { id: 3, name: 'option3' },
    { id: 4, name: 'option4' },
  ];
  myTextarea= 'ok';



  train() {

    console.log('myTextarea : ', this.myTextarea);
  }

  search() {

  }
}
