import {Author} from './author.model';

    export class Book {
        BookName: string;
        NumOfPages: number;
        BookPrice: number;
        AuthorObj = new Author();
    }



