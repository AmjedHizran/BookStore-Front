import {Injectable} from '@angular/core';
import {Author} from './../models/author.model';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class AuthorService {
constructor(private myHttpClient: HttpClient) {}

getAllAuthors (callBack: (b: Array<Author>) => void): void {
        this.myHttpClient.get<Array<Author>>('http://localhost:62521/api/author/all/')
        .subscribe(callBack);
    }



    getAuthor(authorName: string, callBack: (b: Author) => void): void {
        this.myHttpClient.get<Author>('http://localhost:62521/api/author/' + authorName)
        .subscribe(
            callBack
        );
    }



   deleteAuthor(authorID: number, callBack: (b: boolean) => void): void {
    this.myHttpClient.delete<boolean>('http://localhost:62521/api/author/delete/' + authorID)
    .subscribe(
        callBack
    );
}


   addAuthor(author: Author, callBack: (b: boolean) => void): void {
        this.myHttpClient.post<boolean>('http://localhost:62521/api/Author/add/', author)
        .subscribe(
            callBack
        );

    }

    editAuthor(authorName: string , author: Author, callBack: (b: boolean) => void): void {
        this.myHttpClient.put<boolean>('http://localhost:62521/api/Author/edit/' + authorName, author)
        .subscribe(
            callBack
        );
    }
}
