import {Component, OnInit} from '@angular/core';
import {SentenceService} from "./sentence-similarity-service";
import {ToastrService} from "ngx-toastr";
import {Model} from "../../Model";

@Component({
  selector: 'app-sentence-similarity',
  templateUrl: './sentence-similarity.component.html',
  styleUrls: ['./sentence-similarity.component.scss']
})
export class SentenceSimilarityComponent implements OnInit {
  bot_name = '';
  listSentences = [];
  modelList = [];
  selectModel = 'phobert';
  models: Model[] = [];
  question = '';
  uuid = '';
  model = ['phobert', 'vispacy', 'fasttext'];
  myTextarea = '';
  bot_name_input = '';

  constructor(private sentenceServive: SentenceService,
              private toast: ToastrService) {
  }

  cars = ['car1', 'car2', 'car3'];

  ngOnInit(): void {
    console.log('start !')
    this.getAllTestCase();
  }

  getAllTestCase() {

    this.sentenceServive.getAllTestCase().subscribe((resp) => {

      this.modelList = resp.body;
      console.log('modelList : ', this.modelList);

    });
  }

  getTestCaseParaphrases(bot_name: any) {
    this.sentenceServive.getTestCaseParaphrases(bot_name).subscribe((resp) => {
      this.listSentences = resp.body;
      this.toast.success('success');
    }, (error) => {
      this.toast.error('error');
    });


  }

  search(bot_name: any, selectModel: any, question: any) {
    console.log('uuid : ', this.uuid);


    console.log('selectModel : ', this.selectModel);
    console.log('doc : ', this.question);

    this.sentenceServive.search({
      bot_name: bot_name,
      model: selectModel,
      doc: question
    }).subscribe(
      (resp) => {
        this.models = resp.body;
        console.log('Body : ', this.models);
        console.log('length : ', resp.body.length);
        this.toast.success('success');
      }, (error) => {
        this.toast.error('error');
      }
    );
  }

  onclickItem(item: any) {
    this.bot_name = item;
    console.log('item :', item);
    this.getTestCaseParaphrases({bot_name: item});

  }

  onSearch() {
    console.log('bot_name : ', this.bot_name);
    console.log('question : ', this.question);
    this.search(this.bot_name, this.selectModel, this.question);

  }

  onChange(event: any) {
    this.selectModel = event;

  }

  createTestCase(input: any) {

    this.sentenceServive.createTestCase(input).subscribe(
      (resp) => {
        this.uuid = resp.body.uuid;

        this.toast.success('success ', this.uuid);
      }, (error) => {
        this.toast.error('error');
      }
    );
  }

  onCreate() {
    console.log('bot_name_input : ', this.bot_name_input);
    console.log('myTextarea : ', this.myTextarea);
    const arr = this.myTextarea.split(/\n/);
    this.createTestCase({bot_name: this.bot_name_input, paraphrases: arr});

  }
}
