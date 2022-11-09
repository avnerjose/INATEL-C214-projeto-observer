import { StringSplitObservable } from "./implementations/StringSplitObservable";
import { StringSplitObserver } from "./implementations/StringSplitObserver";

const splitStringObservable = new StringSplitObservable();

const obs1 = new StringSplitObserver(1);
const obs2 = new StringSplitObserver(2);
const obs3 = new StringSplitObserver(3);

splitStringObservable.registerObserver(obs1);
splitStringObservable.registerObserver(obs2);
splitStringObservable.registerObserver(obs3);

splitStringObservable.execute(
  "O Chris é o professor que passou esse trabalho."
);

splitStringObservable.removeObserver(2);

splitStringObservable.execute(
  "Essa frase foi executada depois de remover um observer."
);
  