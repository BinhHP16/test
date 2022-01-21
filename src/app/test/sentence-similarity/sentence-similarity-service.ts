import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API_PATH = "http://767d-118-70-182-157.ngrok.io";

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private http: HttpClient) {
  }


  getAllTestCase(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(API_PATH + '/api/v1/annoy-indexs', {observe: 'response'});
  }
  getTestCaseParaphrases(bot_name: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/api/v1/annoy-index/paraphrases',bot_name, {observe: 'response'});
  }
  search(data: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/api/v1/annoy-search',data, {observe: 'response'});
  }
  createTestCase(input:any ): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(API_PATH + '/api/v1/annoy-index',input, {observe: 'response'});
  }
}
