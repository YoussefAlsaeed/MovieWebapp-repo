import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '4e05865eb1db5e7861f50195848499ae';
    this.language = 'en-US';
    this.region = 'US';
  }


  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getPopulardMovies(page: number): Observable<any> {
  
    //return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }
  searchAll(searchStr: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${searchStr}&include_adult=false&language=en-US&page=1`;
    return this.http.get(apiUrl);
  }




}