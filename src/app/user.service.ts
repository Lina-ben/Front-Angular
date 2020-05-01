import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map} from "rxjs/operators";



@Injectable({
    providedIn: 'root',
})

export class UserService {


    constructor(private http: HttpClient) { }
    //code pour l'appel dans kubernetes
  /*  login(username:string,password:string) {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.http.get("http://catalogue.localhost/", {headers, responseType: 'text' as 'json'}).pipe(
            map(
                userData => {
                    sessionStorage.setItem('username',username)
                    return userData;
                }
            )
        );
    }*/

      login(username:string,password:string) {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.http.get("http://localhost:8080/catalogue-service/", {headers, responseType: 'text' as 'json'}).pipe(
            map(
                userData => {
                    sessionStorage.setItem('username',username)
                    return userData;
                }
            )
        );
    }




    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
    }
    logOut() {
        sessionStorage.removeItem('username')
    }








}
