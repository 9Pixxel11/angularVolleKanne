import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IBook} from "../../../shared/ibook";
import {BookDataService} from "../../../shared/book-data.service";

@Component({
  selector: 'book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  isbn: string;
  book: IBook;

  constructor(private route: ActivatedRoute, private bookData: BookDataService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        if(params['isbn']) {
          this.bookData.getBook(params['isbn'])
            .subscribe(b => this.book = b)
        }
      });
  }

  navBack() {
    this.router.navigateByUrl('/books');341
  }

}
