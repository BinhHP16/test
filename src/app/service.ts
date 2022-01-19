import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API_PATH = "localhost:5001/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class tokenizerService {

  constructor(private http: HttpClient) {
  }

  train(paraphrases: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/annoy-index',paraphrases, {observe: 'response'});
  }


}


