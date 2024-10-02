import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../app/app.constant';
import { environment } from "../environments/environment";

export interface News {
  title: string;
  url: string;
}

export interface NewsResponse {
  totalNews: number;
  news: News[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNewestStories(pageNo : number,pageSize : number): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(environment.baseUrl +"/newest/"+pageNo+"/"+pageSize);
  }
}
