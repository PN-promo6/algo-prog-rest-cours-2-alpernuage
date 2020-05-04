import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<any> {
    let usersObservable: Observable<any> = this.httpClient.get('http://localhost:3000/users');
    return usersObservable;
    //   .subscribe(
    //     res => {
    //       res = this.response;
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
  public fetchUserById(id: string): Observable<any> {
    let userIdObservable: Observable<any> = this.httpClient.get('http://localhost:3000/users/' + id);
    return userIdObservable;
  }
}