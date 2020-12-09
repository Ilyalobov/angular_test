import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

interface User {
  name: string;
}
@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  getOne(userId: number): Observable<User> {
    return this._http.get<User>(`/users/${userId}`);
  }
  getAll(): Observable<User[]> {
    return this._http.get<User[]>(`/users`)
  }
}
