import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editing-book',
  templateUrl: './editing-book.component.html',
  styleUrls: ['./editing-book.component.css']
})
export class EditingBookComponent implements OnInit {
  @Input('index') index;
  @Input('name') name;
  @Input('author') author;
  @Input('text') text;

  @Output() updateInfo = new EventEmitter<{index: number; name: string; author: string; text: string}>();

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  updateBookInfo() {
    const index = this.index;
    const name = this.name;
    const author = this.author;
    const text = this.text;
    return this.updateInfo.emit({index, name, author, text});
  }

  closeEditing() {
    this.close.emit(false);
  }

}
