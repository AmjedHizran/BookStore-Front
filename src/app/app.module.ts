import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// modules
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// services
import {AuthorService} from './shared/services/author.service';
import {BookService} from './shared/services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListComponent,
    BookListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
