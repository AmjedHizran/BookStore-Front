import {Injectable} from '@angular/core';
import {Book} from './../models/book.model';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BookService {
    constructor(private myHttpClient: HttpClient) {}

    getAllBooks (callBack: (b: Array<Book>) => void): void {
            // tslint:disable-next-line:quotemark
            this.myHttpClient.get<Array<Book>>("http://localhost:62521/api/book/all/")
            .subscribe(callBack);
        }
        getBook(BookName: string, callBack: (b: Book) => void): void {
            this.myHttpClient.get<Book>('http://localhost:62521/api/book/' + BookName)
            .subscribe(
                callBack
            );
        }
       deleteBook(BookName: string, callBack: (b: boolean) => void): void {
        this.myHttpClient.delete<boolean>('http://localhost:62521/api/book/delete/' + BookName)
        .subscribe(
            callBack
        );
    }
       addBook(book: Book, callBack: (b: boolean) => void): void {
            this.myHttpClient.post<boolean>('http://localhost:62521/api/book/add', book)
            .subscribe(
                callBack
            );
        }
        editBook(bookName: string , book: Book, callBack: (b: boolean) => void): void {
            this.myHttpClient.put<boolean>('http://localhost:62521/api/book/edit/' + bookName, book)
            .subscribe(
                callBack
            );
        }
}
