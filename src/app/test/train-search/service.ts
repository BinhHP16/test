import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API_PATH = "http://1667-118-70-182-157.ngrok.io";

@Injectable({
  providedIn: 'root'
})
export class tokenizerService {

  constructor(private http: HttpClient) {
  }

  train(paraphrases: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/api/v1/annoy-index',paraphrases, {observe: 'response'});
  }


  search(data: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/api/v1/annoy-search',data, {observe: 'response'});
  }

  getAllTestCase(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(API_PATH + '/api/v1/annoy-indexs', {observe: 'response'});
  }
}


