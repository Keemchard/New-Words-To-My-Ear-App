import { Component, OnInit } from '@angular/core';
import { wordInterface } from 'src/app/word-model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-update-word',
  templateUrl: './update-word.component.html',
  styleUrls: ['./update-word.component.css'],
})
export class UpdateWordComponent implements OnInit {
  wordVariable: wordInterface[] = [];
  constructor(private wordServiceObj: WordService) {}

  ngOnInit(): void {
    this.wordServiceObj
      .getWordFromService()
      .subscribe((w) => (this.wordVariable = w));

    let updateCon: HTMLDivElement = document.querySelector('.update-main-con');
    updateCon.style.display = 'none';
  }

  hideUpdateForm() {
    let updateCon: HTMLDivElement = document.querySelector('.update-main-con');
    updateCon.style.display = 'none';
  }

  updateWord: string;
  updatePronounciation: string;
  updateMeaning: string;
  updateContributor: string;

  updateTheWord(word: wordInterface) {
    word.word = this.updateWord;
    word.pronounciation = this.updatePronounciation;
    word.meaning = this.updateMeaning;
    word.contributor = this.updateContributor;
    this.wordServiceObj.updateWordFromService(word).subscribe();

    document.location.reload();
  }
}
