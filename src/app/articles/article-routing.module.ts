import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component'



const Articleroutes: Routes = [
  {path:'list', component: ListArticlesComponent},
  {path:'details/:id', component: DetailsArticlesComponent},
  {path: 'create', component: CreateArticleComponent},
  {path:'create/:id', component: CreateArticleComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(Articleroutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
