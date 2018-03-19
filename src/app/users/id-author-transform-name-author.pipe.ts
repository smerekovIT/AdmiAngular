import { Pipe, PipeTransform } from '@angular/core';

import { UserService } from './user.service';
import { User } from '../models/user';

@Pipe({
  name: 'idAuthorTransformNameAuthor'
})
export class IdAuthorTransformNameAuthorPipe implements PipeTransform {

	constructor(private userService: UserService) {}

  transform(value: any, args?: any): any {
  	let values = +value;
    let name = '';
  	this.userService.getUser(values).subscribe(data => name = data.author)
  	return `${name}`
  }


}
