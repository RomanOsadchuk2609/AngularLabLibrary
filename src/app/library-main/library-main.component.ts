import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-main',
  templateUrl: './library-main.component.html',
  styleUrls: ['./library-main.component.css']
})
export class LibraryMainComponent implements OnInit {

  isBookReading = false;
  currentBook;

  books = [
    {name: 'book1', author: 'author1', text: 'This is book1! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    {name: 'book2', author: 'author2', text: 'This is book2! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    {name: 'book3', author: 'author3', text: 'This is book3! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    {name: 'book4', author: 'author4', text: 'This is book4! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    {name: 'book5', author: 'author5', text: 'This is book51! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    {name: 'book6', author: 'author6', text: 'This is book6! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ];

  constructor() { }

  ngOnInit() {
  }

  readBook(index: number) {
    this.currentBook = this.books[index];
    this.isBookReading = true;
  }


  setBookReading(value: boolean) {
    this.isBookReading = value;
  }
}
