export default class MergeIterator {
  _index = -1;

  [Symbol.iterator] = () => (this);

  get index() {
    return this._index;
  }

  constructor(first, second, comparator) {
    this._items = [
      ...first,
      ...second,
    ].sort(comparator);
  }

  next() {
    this._index++;

    if (this._index >= this._items.length) {
      return { done: true };
    }

    return {
      value: this._items[this._index],
      done: false
    };
  }
}
