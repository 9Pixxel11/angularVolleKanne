import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {IBook} from "../shared/ibook";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  @Input() bookTitle: string;
  @Output() titleClicked = new EventEmitter<string>();
  
  booksList: IBook[];

  constructor(private bookData: BookDataService) { }

  ngOnInit() {
    this.bookData.getBooks()
      .subscribe(b => this.booksList = b);
  }

}
