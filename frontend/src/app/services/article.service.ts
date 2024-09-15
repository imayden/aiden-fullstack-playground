import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment'; // local

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.apiUrl;

  public getApiUrl(): string {
    return this.apiUrl;
  }

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles`).pipe(
      tap(response => {
        console.log('API response:', response); 
      })
    );
  }

  getArticleByUuid(uuid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles/${uuid}`);
  }

}
