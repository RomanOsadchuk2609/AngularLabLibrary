import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-main',
  templateUrl: './library-main.component.html',
  styleUrls: ['./library-main.component.css']
})
export class LibraryMainComponent implements OnInit {

  books = [{name: 'book1', author: 'author1'}, {name: 'book2', author: 'author2'},
    {name: 'book3', author: 'author3'}, {name: 'book4', author: 'author4'},
    {name: 'book5', author: 'author5'}, {name: 'book6', author: 'author6' }];

  constructor() { }

  ngOnInit() {
  }

}
