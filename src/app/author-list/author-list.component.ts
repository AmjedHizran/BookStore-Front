import { Component, OnInit } from '@angular/core';
import {AuthorService} from './../shared/services/author.service';
import {Author} from './../shared/models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

    authorList: Author[];

  constructor(private myAuthorService: AuthorService) { }

  ngOnInit() {
      const func: (a: Array<Author>) => void = (a: Array<Author>) => {
         this.authorList = a;
      };
      this.myAuthorService.getAllAuthors(func);
  }

}
