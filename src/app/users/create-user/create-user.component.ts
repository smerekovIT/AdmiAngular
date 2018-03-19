import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

   constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUserBtnClick(name, author, surname, email, address) {
    const id = Date.now();
    const newUser = {
      id,
      name, 
      author,
      surname, 
      email, 
      address
    }
    this.userService.addUser(newUser)
        .subscribe(data => console.log('ok'))
  }


}
