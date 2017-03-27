import {Component} from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css']
})

export class BooksComponent {
  title = 'Info Box Tutorial';
  localVariableOnComponent = "This is a Book-Title";
}
