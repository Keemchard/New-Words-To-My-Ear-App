import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { wordInterface } from 'src/app/word-model';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css'],
})
export class AddWordComponent implements OnInit {
  word: string;
  pronounciation: string;
  meaning: string;
  contributor: string;

  constructor() {}

  ngOnInit(): void {}

  @Output() onAddWordClick: EventEmitter<wordInterface> = new EventEmitter();
  onSubmit() {
    let wordInput: HTMLInputElement = document.querySelector('#word');
    let proInput: HTMLInputElement = document.querySelector('#pronounciation');
    let meaningInput: HTMLInputElement = document.querySelector('#meaning');
    let contriInput: HTMLInputElement = document.querySelector('#contributor');
    if (
      wordInput.value == '' ||
      proInput.value == '' ||
      meaningInput.value == '' ||
      contriInput.value == ''
    ) {
      alert('Please Fill all the input in form!');
      return;
    }

    const newWord = {
      word: this.word,
      pronounciation: this.pronounciation,
      meaning: this.meaning,
      contributor: this.contributor,
    };

    this.onAddWordClick.emit(newWord);

    this.word = '';
    this.pronounciation = '';
    this.meaning = '';
    this.contributor = '';

    document.location.reload();
  }
}
