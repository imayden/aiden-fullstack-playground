import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { MatCardModule } from '@angular/material/card'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing'; 

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [ MatCardModule, HttpClientTestingModule, RouterTestingModule ], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
