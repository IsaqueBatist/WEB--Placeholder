import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObjectUser } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private url: string = "https://jsonplaceholder.typicode.com/users"

  getUsers(): Observable<RootObjectUser[]>{
    return this.http.get<RootObjectUser[]>(this.url)
  }
}
