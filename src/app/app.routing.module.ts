import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BookListComponent} from './book-list/book-list.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorComponent} from './author/author.component';
import { BookComponent } from './book/book.component';


// הנתיבים השונים שקיימים באתר
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BookListComponent },
    { path: 'authors', component: AuthorListComponent },
    { path: 'author', component: AuthorComponent },
    { path: 'book', component: BookComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

// אובייקט ראוטר - יודע איך להחליף את הקומפוננטות לפי הנתיבים
const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}
