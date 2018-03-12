import { Component, OnInit } from '@angular/core';
import {BookService} from './../shared/services/book.service';
import {Book} from './../shared/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookList: Book[];

    constructor(private myBookService: BookService) { }
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let func: (b: Array<Book>) => void = (b: Array<Book>) => {
           this.bookList = b;
        };
        this.myBookService.getAllBooks(func);
    }

}
