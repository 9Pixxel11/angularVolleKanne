import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { BookDataService } from './shared/book-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MouseCursorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
