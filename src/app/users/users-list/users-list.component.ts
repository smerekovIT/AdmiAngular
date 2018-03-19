import { Component, OnInit } from '@angular/core';


import { UserService } from '../user.service'
import { User } from '../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

getUsers() {
  this.userService.getUsers()
      .subscribe(data => this.users = data)
}

}
