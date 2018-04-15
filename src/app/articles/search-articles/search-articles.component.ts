import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Article } from '../../models/Article';
import { ARTICLES } from '../ARTICLES';
import { ArticleService } from '../article.service';
import { Subject } from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {

  articles$: Observable<Article[]>
  private searchTerms = new Subject<string>()

  constructor(private articleService: ArticleService) { }

  search(term: string): void {
    this.searchTerms.next(term)
  }
  ngOnInit() {
    this.articles$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.searchArticle(term))
    )
  }

}
