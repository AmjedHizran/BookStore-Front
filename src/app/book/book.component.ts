import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    updateSuccess: boolean;
    book: Book;
    searchBookName: string;
    deleteBookName: string;
    newBook: Book = new Book();
    updateBook: Book = new Book();
    addedSuccess: boolean;
    deleteSuccess: boolean;
    showDetails = false;

  constructor(private myBookService: BookService) { }

  onAddingBook() {
    this.addedSuccess = false;
    const func: (b: boolean) => void = (b: boolean) => {
        this.addedSuccess = b;
     };
     this.myBookService.addBook(this.newBook, func);
  }

  onEditBook() {
    this.updateSuccess = false;
    const func: (b: boolean) => void = (b: boolean) => {
        this.updateSuccess = b;
     };
     this.myBookService.editBook(this.searchBookName, this.updateBook, func);
  }

  onClean() {
    this.showDetails = false;
    this.searchBookName = '';
  }

  onResetBook() {
    this.updateSuccess = false;
    this.addedSuccess = false;
    this.newBook = new Book();
    this.updateBook = new Book();
    this.searchBookName = '';
    this.showDetails = false;

  }

  onDeleteBook() {
    this.deleteSuccess = false;
    const func: ( b: boolean) => void = ( b: boolean) => {
        this.deleteSuccess = b;
    };
     this.myBookService.deleteBook(this.deleteBookName, func);
  }
  onSearchBook() {
      this.showDetails = true;
    const func: (a: Book) => void = (a: Book) => {
        this.book = a;
     };
     this.myBookService.getBook(this.searchBookName, func);
  }

  ngOnInit() {
  }

}
