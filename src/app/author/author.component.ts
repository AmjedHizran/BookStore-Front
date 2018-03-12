import { Component, OnInit } from '@angular/core';
import {AuthorService} from './../shared/services/author.service';
import {Author} from './../shared/models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    author: Author;
    searchAuthorName: string;
    deleteAuthor: number;
    newAuthor: Author = new Author();
    updateAuthor: Author = new Author();
    addedSuccess: boolean;
    updateSuccess: boolean;
    deleteSuccess: boolean;
    showDetails = false;
    isNotValid: boolean;
  constructor(private myAuthorService: AuthorService) { }

  onAddingAuthor() {
    this.isNotValid = false;
    this.addedSuccess = false;
    const func: (b: boolean) => void = (b: boolean) => {
        this.addedSuccess = b;
     };
     this.myAuthorService.addAuthor(this.newAuthor, func);
     if (this.addedSuccess === false) {
        this.isNotValid = true;
    }
  }

  onEditAuthor() {
    this.isNotValid = false;
    this.updateSuccess = false;
    const func: (b: boolean) => void = (b: boolean) => {
        this.updateSuccess = b;
     };
     this.myAuthorService.editAuthor(this.searchAuthorName, this.updateAuthor, func);
     if (this.updateSuccess === false) {
         this.isNotValid = true;
     }
    }

  onResetAuthor() {
    this.updateSuccess = false;
    this.addedSuccess = false;
    this.newAuthor = new Author();
    this.updateAuthor = new Author();
    this.searchAuthorName = '';
    this.showDetails = false;
    this.isNotValid = false;

  }

  onDeleteAuthor() {
    this.deleteSuccess = false;
    const func: ( b: boolean) => void = ( b: boolean) => {
        this.deleteSuccess = b;
    };
     this.myAuthorService.deleteAuthor(this.deleteAuthor, func);

  }

  onSearchAuthor() {
      this.showDetails = true;
    const func: (a: Author) => void = (a: Author) => {
        this.author = a;
     };
     this.myAuthorService.getAuthor(this.searchAuthorName, func);
  }
  ngOnInit() {

  }

}
