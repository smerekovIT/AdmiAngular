import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { User } from '../models/user'
import { USERS } from './USERS'


@Injectable()
export class UserService {
  users: User[] = USERS


  constructor() { }


  getUsers(): Observable<User[]> {
    return of(this.users)
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find(c => c.id === id))
  }

  addUser(newUser): Observable<User> {
      this.users = [...this.users, newUser]
      return of(newUser)
  }

}