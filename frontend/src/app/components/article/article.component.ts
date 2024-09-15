import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { response } from 'express';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  article: any = null;
  articleTags: any[] = [];
  articleImage: string = ''; // Image URL
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');

    // if uuid exists
    if (uuid) {
      this.articleService.getArticleByUuid(uuid).subscribe(
        (response) => {
          this.article = response.data;
          this.isLoading = false;

        },
        (error) => {
          console.error(`Error fetching article with UUID ${uuid}:`, error);
          this.errorMessage = 'Failed to load article.';
          this.isLoading = false;
        }
      )
    } else {
      this.errorMessage = 'Invalid article identifier.';
      this.isLoading = false;
    }
  }
}
