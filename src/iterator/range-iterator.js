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
}
