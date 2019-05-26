import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reading-book',
  templateUrl: './reading-book.component.html',
  styleUrls: ['./reading-book.component.css']
})
export class ReadingBookComponent implements OnInit {

  @Input('InputBook') book = {name: String, author: String, text: String};

  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  closeBook() {
    return this.close.emit(false);
  }

}
