import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public url: string;
  public search: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let search = params['search'];
      this.search = search;
      this._articleService.search(search).subscribe(
        response => {
          if (response.articles) {
            this.articles = response.articles;
          } else {
            this.articles = [];
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );
    });
  }

}
