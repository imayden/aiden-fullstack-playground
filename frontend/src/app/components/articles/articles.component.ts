import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [];
  isLoading: boolean = true;
  errorMessage:string = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles():void{
    this.articleService.getAllArticles().subscribe(
      (response) => {
        this.articles = response.data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching articles:', error);
        this.errorMessage = 'Failed to load articles.';
        this.isLoading = false;
      }
    )
  }

}
