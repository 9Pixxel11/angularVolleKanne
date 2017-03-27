import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { BookDataService } from './shared/book-data.service';
import { bookRouting} from "./app-routing.module";
import { TextAreaComponent } from './text-area/text-area.component';
import { BooksComponent } from "./books/books.component";
import { BookDetailsComponent } from './books/components/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    BookListComponent,
    BooksComponent,
    MouseCursorComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    bookRouting
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
