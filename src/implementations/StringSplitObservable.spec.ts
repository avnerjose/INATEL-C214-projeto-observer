import { StringSplitObservable } from "./StringSplitObservable";

describe("StringSplitObservable class", () => {
  it("should have correct initial values", () => {
    const stringSplitObservable = new StringSplitObservable();

    expect(stringSplitObservable.getObservers()).toEqual([]);
    expect(stringSplitObservable.getStringToSplit()).toEqual("");
    expect(stringSplitObservable.getWordsAmount()).toEqual(0);
    expect(stringSplitObservable.getWordsFromString()).toEqual([]);
    expect(stringSplitObservable.getWordsStartingWithUpperAmount()).toEqual(0);
    expect(stringSplitObservable.getWordsWithEvenCharsAmount()).toEqual(0);
  });

  it("should be able to register an observer", () => {
    const stringSplitObservable = new StringSplitObservable();
    const mockedObserver = {
      id: 1,
      getId: jest.fn(),
      update: jest.fn(),
    } as any;

    stringSplitObservable.registerObserver(mockedObserver);

    expect(stringSplitObservable.getObservers()).toHaveLength(1);
    expect(stringSplitObservable.getObservers()[0]).toEqual(mockedObserver);
  });

  it("should be able to manipulate string", () => {
    const stringSplitObservable = new StringSplitObservable();
    const splitToString = "This is a test string";

    stringSplitObservable.execute(splitToString);

    expect(stringSplitObservable.getStringToSplit()).toEqual(splitToString);
    expect(stringSplitObservable.getWordsAmount()).toEqual(
      splitToString.split(" ").length
    );
    expect(stringSplitObservable.getWordsFromString()).toEqual(
      splitToString.split(" ")
    );
    expect(stringSplitObservable.getWordsStartingWithUpperAmount()).toEqual(1);
  });

  it("should be able to remove an observer", () => {
    const stringSplitObservable = new StringSplitObservable();
    const mockedObserver = {
      id: 1,
      getId: jest.fn(() => 1),
      update: jest.fn(),
    } as any;

    stringSplitObservable.registerObserver(mockedObserver);
    stringSplitObservable.removeObserver(1);

    expect(stringSplitObservable.getObservers()).toHaveLength(0);
  });

  it("should not be able to remove an observer that does not exists", () => {
    const stringSplitObservable = new StringSplitObservable();

    expect(() => stringSplitObservable.removeObserver(1)).toThrow();
  });

  it("should be able to notify observer", () => {
    const stringSplitObservable = new StringSplitObservable();
    const mockedUpdate = jest.fn();
    const mockedObserver = {
      id: 1,
      getId: jest.fn(() => 1),
      update: mockedUpdate,
    } as any;

    stringSplitObservable.registerObserver(mockedObserver);
    stringSplitObservable.notifyObservers();

    expect(mockedUpdate).toHaveBeenCalled();
  });
});
