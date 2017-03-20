import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  @Input() bookTitle: string;
  @Output() titleClicked = new EventEmitter<string>();

  books = [];

  constructor(private bookData: BookDataService) {
    this.books = bookData.getBooks();
  }

  ngOnInit() {
  }

}
