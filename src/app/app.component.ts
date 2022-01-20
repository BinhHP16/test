import {Component} from '@angular/core';
import {tokenizerService} from "./test/train-search/service";
import {Model} from "./Model";
import {NgSelectConfig} from "@ng-select/ng-select";
import {ToastrService} from "ngx-toastr";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';

}
