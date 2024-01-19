const node = require('./node.js');

function linkedList() {
  let _head = null;
  let _tail = null;
  let _size = 0;

  const prepend = (value) => {
    _size += 1;
    _head = node(value, _head);

    if (_size === 1) _tail = _head;
  }

  const append = (value) => {
    if(_head === null) {
      prepend(value);
      return;
    }

    _size += 1;
    let curr = _head;

    while(curr.next !== null) curr = curr.next;
    curr.next = node(value, null);
    _tail = curr.next;
  }

  const tail = () => {
    let curr = _head;

    while(curr.next !== null) curr = curr.next;
    return curr;
  }

  const at = (num) => {
    let idx = 0;
    let curr = _head;

    if (num >= _size) throw new Error('Index out of bounds: The specified index exceeds the size of the list.')

    while(idx < num) {
      curr = curr.next;
      idx += 1;
    }
    
    const value = curr.data;
    return value;
  }

  const pop = () => {
    let curr = _head;
    let prev = undefined;

    if(_head !== null) _size -= 1;

    while(curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    if (prev) {
      prev.next = null;
      _tail = prev;
    } else {
      _head = null;
      _tail = null;
    }

    const value = curr.data;
    return value;
  }

  const contains = (key) => {
    let curr = _head;

    while(curr !== null) {
      if(curr.data == key) return true;
      curr = curr.next;
    }

    return false;
  }

  const find = (key) => {
    let curr = _head;
    let idx = 0;

    while(curr !== null) {
      if(curr.data == key) return idx;

      curr = curr.next;
      idx += 1;
    }

    return null;
  }

  const toString = () => {
    let curr = _head;
    let messageArr = [];

    while(curr !== null) {
      messageArr.push(curr.data);

      curr = curr.next;
    }
    messageArr.push('null');

    return messageArr.join(' -> ');
  }

  const insertAt = (value, index) => {
    let prev = undefined;
    let curr = _head;
    let i = 0;

    if(index === 0) {
      prepend(value);
    } else {
      if(index > _size) throw new Error('Invalid index for insertion.');

      while(index !== i) {
        prev = curr;
        curr = curr.next;
        i += 1;
      }

      prev.next = node(value, curr);
      _size += 1;
    }
  }

  const removeAt = (index) => {
    let prev = undefined;
    let curr = _head;
    let i = 0;

    if(index >= _size) throw new Error('Invalid index for deletion');

    while(i < index) {
      prev = curr;
      curr = curr.next;
      i += 1;
    }

    if (index == 0) _head = curr.next;
    else prev.next = curr.next;

    _tail = tail();
    _size -= 1;
  }

  return {
    get head() { return _head; },
    get size() { return _size },
    get tail() { return _tail },
    prepend,
    append,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }
}

module.exports = linkedList;
