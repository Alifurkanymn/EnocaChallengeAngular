import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsResponse } from '../models/NewsModel'
import { Observable } from 'rxjs';
import { NewSourceResponse } from '../models/CategoryNews';
@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private http:HttpClient) { }
  apiUrl ="https://newsapi.org/v2/everything?q=turkey&from=2022-12-14&sortBy=publishedAt&pageSize=20&apiKey=676f017549224f488970f1835f9db971"

  getNewsApp(search: string, page: number, category: string): Observable<NewsResponse>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?from=2022-12-14&sortBy=publishedAt&pageSize=20&country=tr&page=${page}&category=${category}&apiKey=09826e24ee7748a2a05490b1e936fd9b`);
  }

}
