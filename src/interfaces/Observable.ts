import { Observer } from "./Observer";

interface Observable {
  registerObserver: (o: Observer) => void;
  removeObserver: (id: number) => void;
  notifyObservers: () => void;
}

export { Observable };
