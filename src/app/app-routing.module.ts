import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [
	{path: 'articles',
	 loadChildren: 'app/articles/articles.module#ArticlesModule',
   data: { preload: true }
	},
	{path: 'users',
	 loadChildren: 'app/users/users.module#UsersModule'	
	}

];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }

