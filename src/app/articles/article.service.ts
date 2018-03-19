import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Article } from '../models/Article';
import { ARTICLES } from './ARTICLES';



@Injectable()
export class ArticleService {

  
Articles: Article[] = ARTICLES;
  constructor() { }


  getArticles(): Observable<Article[]> {
    return of(this.Articles)
  }

  getArticle(id: number): Observable<Article> {
    return of(this.Articles.find(c => c.id === id))
  }

  addArticle(newArticle): Observable<Article> {
    this.Articles = [...this.Articles, newArticle];
    
    return of(newArticle);

  }

updateArticle(id,title, body, author) {
  const update = {
    id,
    title,
    body,
    author
  }
  this.Articles = this.Articles.map(c => c.id === update.id ? update : c)
  return of(update)
}

}
