import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ArticleService } from '../article.service';
import { Article } from '../../models/Article';




@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

 article: Article;
 

  constructor(
    
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { };

  ngOnInit() {
    this.getArticle();
    
  };
  

addArticleBtnClick(title, body, author) {
  const id = Date.now();
  const newArticle = {
    id,
    title,
    body,
    author

  };
  this.articleService.addArticle(newArticle)
      .subscribe((data) => console.log(data))
};


updateArticleBtnClick(id, title, body, author) {
  this.articleService.updateArticle(id, title, body, author)
    .subscribe(data => console.log(data));
};

getArticle(): void { 
  const id = +this.route.snapshot.paramMap.get('id');
  this.articleService.getArticle(id)
      .subscribe(data => this.article = data);
 };


}
