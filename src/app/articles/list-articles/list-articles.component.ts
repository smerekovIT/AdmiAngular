import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ArticleService } from '../article.service'
import { Article } from '../../models/Article';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

 articles$: Observable<Article[]>;

  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.getArticles()
  };

	getArticles () {
		this.articles$ = this.articlesService.getArticles()
  
	};
};
