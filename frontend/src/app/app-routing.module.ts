import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'articles', component: ArticlesComponent },  
  { path: 'article/:uuid', component: ArticleComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
