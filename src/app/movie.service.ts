import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})

export class MovieService {



  constructor(private http: HttpClient) { }
  getmovies(): Observable<any> {
      //code pour l'appel dans kubernetes
  //  return this.http.get("http://gateway.localhost/movie-service/all").map((response: Response) => response);
      return this.http.get("http://localhost:8080/movie-service/all").map((response: Response) => response);
  }

  getmoviesWithId(movieid): Observable<any> {
   // return this.http.get( "http://gateway.localhost/movie-service/" + movieid).map((response: Response) => response);
      return this.http.get( "http://localhost:8080/movie-service/" + movieid).map((response: Response) => response);
  }

  //code pour l'appel dans kubernetes
  /* return this.http.get("http://gateway.localhost/movie-service/title/" + title).map((response: Response) => response).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw(error);
        }
    );*/
    getmoviesWithTitle(title): Observable<any> {
      return this.http.get("http://localhost:8080/movie-service/title/" + title).map((response: Response) => response).catch(
          (error: Response) => {
              console.log(error);
              return Observable.throw(error);
          }
      );
  }



}
