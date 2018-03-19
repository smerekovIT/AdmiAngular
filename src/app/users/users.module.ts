import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { TransformModule } from '../transform/transform.module'

import { UserService } from './user.service';

import { UserRoutingModule } from './user-routing.module';
import { IdAuthorTransformNameAuthorPipe } from './id-author-transform-name-author.pipe';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    TransformModule
  ],
  declarations: [UsersListComponent, UserDetailsComponent, CreateUserComponent, IdAuthorTransformNameAuthorPipe],
  providers: [UserService],
  exports: [IdAuthorTransformNameAuthorPipe]
})
export class UsersModule { }
