import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../Models/Hero';

@Injectable()
export class HeroService {
readonly baseUrl: string = "http://DionFinnerty.somee.com/HeroGame/"
  constructor(private _http: HttpClient) { 

  }
  // getAllHeroes(): Observable<Hero[]>{
  //   return this._http.get<Hero[]>(this.baseUrl + "Hero")
  // }

}