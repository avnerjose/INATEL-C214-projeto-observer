import { Observer } from "../interfaces/Observer";
import { StringSplitObservable } from "./StringSplitObservable";

class StringSplitObserver implements Observer {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  update(o: StringSplitObservable) {
    console.log("--------------------------------------");
    console.log("Observer: " + this.id);
    console.log("Frase original: " + o.getStringToSplit());
    console.log("Palavras da frase original: ");
    o.getWordsFromString().forEach((p, i) => {
      console.log(i + 1 + "-" + p);
    });
    console.log("Quantidade de palavras: " + o.getWordsAmount());
    console.log(
      "Quantidade de palavras que inicial com letras maiúsculas: " +
        o.getWordsStartingWithUpperAmount()
    );
    console.log(
      "Quantidade de palavras com número par de caracteres: " +
        o.getWordsWithEvenCharsAmount()
    );
    console.log("");
  }

  public getId() {
    return this.id;
  }
}

export { StringSplitObserver };
