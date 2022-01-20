import {Component} from '@angular/core';
import {tokenizerService} from "./service";
import {Model} from "./Model";
import {NgSelectConfig} from "@ng-select/ng-select";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: tokenizerService,
              private config: NgSelectConfig,
              private toast: ToastrService,

  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  arrText = [] as string[];

  question = '';
  selectModel = 'phobert';
  models: Model[] = [];
  title = 'Test';
  uuid = '';
  // option=['option1', 'option2 ', 'option3'];
  // selectedOption = 'option1';
  formModel: any = {};
  paraphrases = {
    "paraphrases": this.arrText
  };
  data = {
    "bot_id": this.uuid,
    "model": this.selectModel,
    "doc": this.question
  };


  model = ['phobert', 'vispacy', 'fasttext'];

  myTextarea = '';


  train() {
    const arr = this.myTextarea.split(/\n/);
    console.log('myTextarea : ', this.myTextarea);
    console.log('++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('arrText : ', this.arrText);
    this.service.train({paraphrases: arr}).subscribe(

      (resp) => {

          console.log('Body : ', resp.body);
          this.uuid = resp.body.uuid;
          this.toast.success('success');


          this.toast.error('error');

      },(err)=>{
        this.toast.error('error');
      }
    );


    //
    // this.systemAlarm.save(this.formModel).subscribe((resp) => {
    //   this.toast.success('Alarm saved');
    //   this.router.navigate(['/system-monitoring/system/' + this.systemId + '/system-alarm']);
    // }, (err) => {
    //   if (err && err.status === 409 && err.error && err.error.apierror && err.error.apierror.subErrors) {
    //     const duplicatedColumns = err.error.apierror.subErrors[0].duplicatedColumns;
    //     focusDuplicatedFields(duplicatedColumns, this.formModelCheck);
    //   } else {
    //     this.toast.error('Dupplicated Alarm !!!', '', {timeOut: 10000} as Partial<GlobalConfig>);
    //   }
    // });


  }

  search() {
    console.log('uuid : ', this.uuid);
    this.data.bot_id = this.uuid;
    console.log('data.uuid : ', this.data.bot_id);
    console.log('selectModel : ', this.selectModel);
    console.log('doc : ', this.question);

    this.service.search({
      bot_id: this.uuid,
      model: this.selectModel,
      doc: this.question
    }).subscribe({
      next: (resp) => {
        this.models = resp.body;
        console.log('Body : ', this.models);
        console.log('length : ', resp.body.length);
      }
    });
  }


  onChange(event: string) {

    console.log('event : ', event);
    this.selectModel = event;

    console.log('Selected model : ', this.selectModel);
  }


  test() {
    this.toast.success("Hello, I'm the toastr message.")
  }
}
