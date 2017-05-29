# Javascript design patterns

The following project is aimed to demonstrate and document the fundamental design patterns in javascript.

Patterns will be shown in code and partially in tests.


- [The iterator pattern](#iterator-pattern)


## <a name="markdown-pane"></a>The iterator pattern

I assume Mark will explain in more detail, here are his code examples to have a look already:

```
export default class RangeIterator {

  [Symbol.iterator] = () => (this)

  get index() {
    return this._index;
  }

  constructor(start, end, increment) {
    this._index = start;
    this._start = start;
    this._end = end;
    this._increment = increment;
  }

  next() {
    if (this._index >= this._end) {
      return { done: true };
    }

    this._index++;

    return {
      value: this._start += this._increment,
      done: false
    };
  }

  hasNext() {
    return this._index < this._end.length;
  }
}
```

```
import RangeIterator from '../../src/iterator/range-iterator';

describe('RangeIterator', () => {
  let sut = new RangeIterator(0, 30, 2);

  for (let number of sut) {
    let value = sut.index * 2;
    it(`returns the current iteration range value ${value}`, () => {
      expect(number).toEqual(value);
    });
  };
});
```
