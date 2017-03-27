import {RouterModule, Routes} from '@angular/router'

import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./books/components/book-details/book-details.component";

export const bookRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
  { path: '**', redirectTo: '/books' },
];

export const bookRouting = RouterModule.forRoot(bookRoutes)
