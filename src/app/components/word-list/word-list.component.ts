import { Component, OnInit } from '@angular/core';
import { wordInterface } from 'src/app/word-model';
import { wordArray } from 'src/app/mock-word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
})
export class WordListComponent implements OnInit {
  wordVariable: wordInterface[] = [];
  constructor(private wordServiceObj: WordService) {}

  ngOnInit(): void {
    this.wordServiceObj
      .getWordFromService()
      .subscribe((w) => (this.wordVariable = w));
  }

  deleteWord(wordToBeDeleted: wordInterface) {
    this.wordServiceObj
      .deleteWordFromService(wordToBeDeleted)
      .subscribe(
        () =>
          (this.wordVariable = this.wordVariable.filter(
            (w) => w.id !== wordToBeDeleted.id
          ))
      );
  }

  toggleUpdateForm() {
    let updateCon: HTMLDivElement = document.querySelector('.update-main-con');
    updateCon.style.display = 'flex';
  }
}
