import { Pipe, PipeTransform } from '@angular/core';

import { USERS } from './users/USERS'
import { User } from './models/user'




@Pipe({
  name: 'userIdTransformUserName'
})
export class UserIdTransformUserNamePipe implements PipeTransform {
	users: User[] = USERS;

  transform(value: any, args?: any): any {
  	let user = (this.users.find(c => c.id == value))
    return `${user.name}`;
  }

}
