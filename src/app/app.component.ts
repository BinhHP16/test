import {Component} from '@angular/core';
import {tokenizerService} from "./service";
import {Model} from "./Model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: tokenizerService
  ) {
  }

  models: Model[] = [];
  title = 'Test';
  uuid = 'fbdfjgdfkgvndf';
  // option=['option1', 'option2 ', 'option3'];
  selectedOption = 'option1';
  formModel: any = {};
  paraphrases = {
    "paraphrases": [
      "nghỉ thai sản có được lương không"]
  };
  data = {
    "bot_id": this.uuid,
    "model": "phobert",
    "doc": "nghỉ thai sản có được lương không"
  };


  model = ['phobert', 'vispacy', 'fasttext'];
  myTextarea = 'ok';
  selectModel = 'phobert';


  train() {

    console.log('myTextarea : ', this.myTextarea);
    this.service.train(this.paraphrases).subscribe({
      next: (resp) => {
        console.log('Body : ', resp.body);
        this.uuid = resp.body.uuid;
      }
    });


  }

  search() {
    console.log('uuid : ', this.uuid);
    this.data.bot_id = this.uuid;
    console.log('data.uuid : ', this.data.bot_id);

    this.service.search(this.data).subscribe({
      next: (resp) => {
        console.log('Body : ', resp.body.json);
        this.models = {...resp.body};
        console.log('Body : ', this.models);
        console.log('length : ',resp.body.length );
      }
    });
  }


}
