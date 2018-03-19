import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UsersModule } from '../users/users.module';

import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';

import { ArticleService } from './article.service';
import { UserService } from '../users/user.service'

import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
    UsersModule

    
  ],
  declarations: [ListArticlesComponent, DetailsArticlesComponent, CreateArticleComponent],
  providers: [ArticleService, UserService]
})
export class ArticlesModule { }
