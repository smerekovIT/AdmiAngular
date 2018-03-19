import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routesUsers:Routes = [
  {path: 'list', component: UsersListComponent},
  {path: 'detail/:id', component: UserDetailsComponent},
  {path: 'create', component: CreateUserComponent}

]
@NgModule({
  imports: [
    RouterModule.forChild(routesUsers)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
