
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing'; 

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesComponent ],
      imports: [ MatCardModule, MatButtonModule, HttpClientTestingModule, RouterTestingModule ], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

