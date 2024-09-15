import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
