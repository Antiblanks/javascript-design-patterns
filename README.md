# Javascript design patterns

The following project is aimed to demonstrate and document the fundamental design patterns in javascript.

Patterns will be shown in code and partially in tests.


- [The iterator pattern](#iterator-pattern)


## <a name="markdown-pane"></a>The iterator pattern

I assume Mark will explain in more detail, here are his code examples to have a look already:

```
export default class DogsIterator {
  _nextIndex = 0

  constructor(iterable) {
    this._keys = Object.keys(iterable);
    this._values = Object.values(iterable);
  }

  [Symbol.iterator] = () => ({ next: () => this.next() });

  next() {
    if (this._nextIndex > this._keys.length) {
      this._nextIndex = 0;
      return { done: true };
    }

    let key = this._keys[this._nextIndex];
    let value = this._values[this._nextIndex];

    this._nextIndex++;

    return {
      value: {
        ...value,
        bread: key
      },
      done: false
    }
  }
}
```

```
import DogsIterator from '../../src/iterator/dogs-iterator';

describe('DogsIterator', () => {
  let model, sut;

  beforeEach(() => {
    model = {
      'Husky': { name: 'Fred' },
      'Labrador': { name: 'Bob' },
    };
    sut = new DogsIterator(model);
  });

  it('iterates model', () => {
    for (let dog of sut) {
      console.log(dog);
    };
  });
});
```
