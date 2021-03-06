import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = "https://jsonplaceholder.typicode.com";
  public search = new BehaviorSubject<String>("");

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this._http.get<Post[]>(this.apiUrl + '/posts/')
  }

  find(id:number): Observable<Post> {
    return this._http.get<Post>(this.apiUrl + '/posts/' + id);
  }

  create(post:Post): Observable<Post> {
    return this._http.post<Post>(this.apiUrl + '/posts', JSON.stringify(post), this.httpOptions)
  }

  delete(id:number) {
    return this._http.delete<Post>(this.apiUrl + '/posts/' + id, this.httpOptions)
  }

  update(id:number|undefined, post:Post): Observable<Post> {
    return this._http.put<Post>(this.apiUrl + '/posts' + id, this.httpOptions);
  }





  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
  }

}
