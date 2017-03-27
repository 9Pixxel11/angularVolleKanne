import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {IBook} from "./ibook";

@Injectable()
export class BookDataService {

  baseUrl: string = "http://localhost:4730/books";

  constructor(private http: Http) { }

  getBooks():Observable<IBook[]> {
    return this.http.get(this.baseUrl).map(response => response.json());
  }

  getBook( isbn:string ): Observable<IBook> {
    return this.http.get(this.baseUrl + "/" + isbn).map(response => response.json());
  }
}
