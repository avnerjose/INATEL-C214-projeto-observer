import { Observable } from "./Observable";

interface Observer {
  getId: () => number;
  update: (o: Observable) => void;
}
export { Observer };
