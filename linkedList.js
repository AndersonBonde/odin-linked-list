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

  return {
    get head() { return _head; },
    get size() { return _size },
    get tail() { return tail() },
    prepend,
    append
  }
}
let myList = linkedList();
myList.prepend('World');
myList.prepend('Hello');
myList.append('Hello');
myList.append('I"m under the water');
console.log(myList.tail);
