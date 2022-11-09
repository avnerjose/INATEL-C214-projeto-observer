import { StringSplitObserver } from "./StringSplitObserver";

describe("StringSplitObserver class", () => {
  it("should be able to create an observer with id", () => {
    const stringSplitObserver = new StringSplitObserver(1);

    expect(stringSplitObserver.getId()).toBe(1);
  });

  it("should be able to update observer", () => {
    const stringSplitObserver = new StringSplitObserver(1);
    const mockedGetStringToSplit = jest.fn(() => "Mocked words");
    const mockedGetWordsFromString = jest.fn(() => ["Mocked", "words"]);
    const mockedGetWordsAmount = jest.fn(() => 2);
    const mockedGetWordsStartingWithUpperAmount = jest.fn(() => 1);
    const mockedGetWordsWithEvenCharsAmount = jest.fn(() => 1);

    const mockedObservable = {
      getStringToSplit: mockedGetStringToSplit,
      getWordsFromString: mockedGetWordsFromString,
      getWordsAmount: mockedGetWordsAmount,
      getWordsStartingWithUpperAmount: mockedGetWordsStartingWithUpperAmount,
      getWordsWithEvenCharsAmount: mockedGetWordsWithEvenCharsAmount,
    } as any;

    stringSplitObserver.update(mockedObservable);

    expect(mockedGetStringToSplit).toHaveBeenCalled();
    expect(mockedGetWordsFromString).toHaveBeenCalled();
    expect(mockedGetWordsAmount).toHaveBeenCalled();
    expect(mockedGetWordsStartingWithUpperAmount).toHaveBeenCalled();
    expect(mockedGetWordsWithEvenCharsAmount).toHaveBeenCalled();
  });
});
