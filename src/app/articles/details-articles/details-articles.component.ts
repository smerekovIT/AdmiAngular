import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ArticleService } from '../article.service'
import { Article } from '../../models/Article';

@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.component.html',
  styleUrls: ['./details-articles.component.css']
})
export class DetailsArticlesComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticle();
    
  }

getArticle(): void { 
  const id = +this.route.snapshot.paramMap.get('id');
  this.articleService.getArticle(id)
      .subscribe(data => this.article = data)
 };
 
}
