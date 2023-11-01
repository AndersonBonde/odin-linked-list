function node(data, next = null) {
  return {
    data,
    next
  }
}

function linkedList() {
  let _head = null;
  let _size = 0;

  const prepend = (value) => {
    _size += 1;
    _head = node(value, _head);
  }

  const append = (value) => {
    _size += 1;
    let curr = _head;

    while(curr.next !== null) curr = curr.next;
    curr.next = node(value, null);
  }

  const tail = () => {
    let curr = _head;

    while(curr.next !== null) curr = curr.next;
    return curr;
  }

  const at = (num) => {
    let idx = 0;
    let curr = _head;

    while(idx < num) {
      curr = curr.next;
      idx += 1;
    }

    return curr !== null ? curr : 'Not a valid index';
  }

  const pop = () => {
    let curr = _head;
    let prev = undefined;

    if(_head !== null) _size -= 1;

    while(curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
  }

  return {
    get head() { return _head; },
    get size() { return _size },
    get tail() { return tail() },
    prepend,
    append,
    at,
    pop
  }
}
let myList = linkedList();
myList.prepend('World');
myList.prepend('Hello');
myList.append('Hello');
myList.append('I"m under the water');
console.log(myList.at(3), myList.size);
myList.pop();
console.log(myList.tail, myList.size);
