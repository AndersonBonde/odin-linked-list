const { describe } = require('yargs');
const linkedList = require('../linkedList');
const exp = require('constants');

let myList;

beforeEach(() => {
  myList = linkedList();
});

test('Newly created list head points to null', () => {
  expect(myList.head).toBe(null);
});

test('Newly created list tail points to null', () => {
  expect(myList.tail).toBe(null);
});

test('Newly created list size is 0', () => {
  expect(myList.size).toBe(0);
});

test('List size updates correctly after appending', () => {
  myList.append('First');
  expect(myList.size).toBe(1);
  myList.append('Second');
  expect(myList.size).toBe(2);
});

test('List head updates correctly after append', () => {
  myList.append('First');
  expect(myList.head).toEqual({ data: 'First', next: null });
  myList.append('Second');
  expect(myList.head).toEqual({ data: 'First', next: { data: 'Second', next: null }});
});

test('List tail updated correctly after append', () => {
  myList.append('First');
  expect(myList.tail).toEqual({ data: 'First', next: null });
  myList.append('Second');
  expect(myList.tail).toEqual({ data: 'Second', next: null });
});

test('List size updates correctly after prepend', () => {
  myList.prepend('First');
  expect(myList.size).toBe(1);
  myList.prepend('Second');
  expect(myList.size).toBe(2);
});

test('List head updates correctly after prepend', () => {
  myList.prepend('First');
  expect(myList.head).toEqual({ data: 'First', next: null });
  myList.prepend('Second');
  expect(myList.head).toEqual({ data: 'Second', next: { data: 'First', next: null }});
});

test('List tail updates correctly after prepend', () => {
  myList.prepend('First');
  expect(myList.tail).toEqual({ data: 'First', next: null });
  myList.prepend('Second');
  expect(myList.tail).toEqual({ data: 'First', next: null });
});

test('List at() returns the correct value', () => {
  myList.append('First');
  myList.append('Second');

  let el = myList.at(0);
  expect(el).toBe('First');
  el = myList.at(1);
  expect(el).toBe('Second');
  expect(() => myList.at(2)).toThrow(Error);
});

test('List pop() removes the last item and returns it', () => {
  myList.append('First');
  myList.append('Second');
  const popped = myList.pop();
  expect(myList.tail).toEqual({ data: 'First', next: null });
  expect(popped).toBe('Second');
});

test('List pop() updates the size of the list correctly', () => {
  myList.append('First');
  myList.append('Second');
  expect(myList.size).toBe(2);
  myList.pop();
  expect(myList.size).toBe(1);
});

test('List contains() return true for items in the list', () => {
  myList.append('First');
  myList.append('Second');
  expect(myList.contains('First')).toBe(true);
});

test('List contains() return false for items not in the list', () => {
  myList.append('First');
  myList.append('Second');
  expect(myList.contains('Third')).toBe(false);
});
