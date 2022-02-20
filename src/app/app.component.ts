import { Component, OnInit } from '@angular/core';
import { wordInterface } from './word-model';
import { WordService } from './services/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularTesting';

  wordVariable: wordInterface[] = [];
  constructor(private wordServiceObj: WordService) {}

  ngOnInit(): void {}

  addWord(wordToBeAdded: wordInterface) {
    this.wordServiceObj
      .addWordFromService(wordToBeAdded)
      .subscribe(() => this.wordVariable.push(wordToBeAdded));
  }
}
