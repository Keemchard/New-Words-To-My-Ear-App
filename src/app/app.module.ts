import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { UpdateWordComponent } from './components/update-word/update-word.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddWordComponent,
    WordListComponent,
    UpdateWordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
