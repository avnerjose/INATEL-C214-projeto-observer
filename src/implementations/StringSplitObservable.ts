import { Observable } from "../interfaces/Observable";
import { StringSplitObserver } from "./StringSplitObserver";

class StringSplitObservable implements Observable {
  private observers: StringSplitObserver[];
  private wordsFromString: String[];
  private wordsAmount: number;
  private wordsStartingWithUpperAmount: number;
  private wordsWithEvenCharsAmount: number;
  private stringToSplit: String;

  constructor() {
    this.observers = [];
    this.wordsFromString = [];
    this.stringToSplit = "";
    this.wordsAmount = 0;
    this.wordsStartingWithUpperAmount = 0;
    this.wordsWithEvenCharsAmount = 0;
  }

  registerObserver(o: StringSplitObserver): void {
    this.observers.push(o);
  }

  removeObserver(id: number): void {
    const observerExists = this.findObserverById(id) !== -1;

    if (!observerExists) {
      throw new Error("Observer não existe");
    }

    this.observers = this.observers.filter((o) => o.getId() !== id);
  }

  notifyObservers(): void {
    this.observers.forEach((o) => o.update(this));
  }

  private findObserverById(id: number) {
    return this.observers.findIndex((o) => o.getId() === id);
  }

  execute(stringToSplit: String) {
    let startsWithUpperAmount = 0;
    let hasEvenCharsAmount = 0;

    this.stringToSplit = stringToSplit;
    this.wordsFromString = stringToSplit.split(" ");
    this.wordsAmount = this.wordsFromString.length;
    this.wordsFromString.forEach((w) => {
      let aux = w.charAt(0);

      if (aux === aux.toUpperCase()) {
        startsWithUpperAmount++;
      }

      if (w.length % 2 === 0) {
        hasEvenCharsAmount++;
      }
    });

    this.wordsStartingWithUpperAmount = startsWithUpperAmount;
    this.wordsWithEvenCharsAmount = hasEvenCharsAmount;

    this.notifyObservers();
  }

  getObservers() {
    return this.observers;
  }

  getStringToSplit() {
    return this.stringToSplit;
  }

  getWordsStartingWithUpperAmount() {
    return this.wordsStartingWithUpperAmount;
  }

  getWordsWithEvenCharsAmount() {
    return this.wordsWithEvenCharsAmount;
  }

  getWordsFromString() {
    return this.wordsFromString;
  }

  getWordsAmount() {
    return this.wordsAmount;
  }
}

export { StringSplitObservable };
