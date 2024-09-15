
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService]
    });
    service = TestBed.inject(ArticleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all articles', () => {
    const dummyArticles = [
      { id: '1', attributes: { title: 'Test Article 1' } },
      { id: '2', attributes: { title: 'Test Article 2' } },
      { id: '3', attributes: { title: 'Test Article 3' } }
    ];
  
    service.getAllArticles().subscribe(articles => {
      expect(articles.length).toBe(3);
      expect(articles).toEqual(dummyArticles);
    });
  
    const req = httpMock.expectOne(`${service.getApiUrl()}/articles`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyArticles);
  });
});
