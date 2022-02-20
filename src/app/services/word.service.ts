import { Injectable } from '@angular/core';
import { wordInterface } from '../word-model';
import { wordArray } from '../mock-word';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private apiUrl = 'http://localhost:5000/word';
  constructor(private http: HttpClient) {}

  getWordFromService(): Observable<wordInterface[]> {
    return this.http.get<wordInterface[]>(this.apiUrl);
  }

  addWordFromService(word: wordInterface): Observable<wordInterface> {
    return this.http.post<wordInterface>(this.apiUrl, word, httpOptions);
  }

  deleteWordFromService(word: wordInterface): Observable<wordInterface> {
    const url = `${this.apiUrl}/${word.id}`;
    return this.http.delete<wordInterface>(url);
  }

  updateWordFromService(word: wordInterface): Observable<wordInterface> {
    const url = `${this.apiUrl}/${word.id}`;
    return this.http.put<wordInterface>(url, word, httpOptions);
  }
}
