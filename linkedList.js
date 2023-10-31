// import node from './node';

function node(data, next = null) {
  return {
    data,
    next
  }
}

function linkedList() {
  let _head = null;

  const head = () => _head;
  const prepend = (value) => _head = node(value, _head);

  return {
    head,
    prepend
  }
}
let myList = linkedList();
console.log(`Initial head pointer: ${myList.head()}`);

myList.prepend('Hello');
console.log(`After prepend: ${myList.head().data}`);