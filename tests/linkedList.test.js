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

test('List find() returns the correct index position', () => {
  myList.append('First');
  myList.append('Second');
  expect(myList.find('First')).toBe(0);
  myList.prepend('Prepend');
  expect(myList.find('First')).toBe(1);
  expect(myList.find('Prepend')).toBe(0);
});

test('List find() returns null when list doesn`t contain the key', () => {
  myList.append('First');
  myList.append('Second');
  expect(myList.find('Third')).toBe(null);
  expect(myList.find('Second')).toBe(1);
  myList.pop();
  expect(myList.find('Second')).toBe(null);
});

test('List insertAt(0) inserts item as first of the list', () => {
  myList.append('First');
  myList.insertAt('Insert', 0);
  expect(myList.find('First')).toBe(1);
  expect(myList.head).toEqual({ data: 'Insert', next: { data: 'First', next: null }});
});

test('List insertAt() inserts item at correct index', () => {
  myList.append('First');
  myList.append('Second');
  myList.insertAt('Insert', 1);
  expect(myList.find('Insert')).toBe(1);
  expect(myList.tail).toEqual({ data: 'Second', next: null });
  expect(() => myList.insertAt('Index4', 4)).toThrow(Error);
});

test('List insertAt() updates head correctly if inserted on index 0', () => {
  myList.append('First');
  myList.insertAt('Insert', 0);
  expect(myList.head).toEqual({ data: 'Insert', next: { data: 'First', next: null }});
});

test('List insertAt() updates tail correctly if inserted on index === size', () => {
  myList.append('First');
  myList.insertAt('Insert', 1);
  expect(myList.tail).toEqual({ data: 'Insert', next: null });
});

test('List insertAt() updates size correctly', () => {
  myList.append('First');
  myList.insertAt('Insert', 1);
  expect(myList.size).toBe(2);
  myList.insertAt('Insert2', 0);
  expect(myList.size).toBe(3);
});

test('List removeAt() removes correct item', () => {
  myList.append('First');
  myList.append('Second');
  myList.append('Third');
  myList.removeAt(1);
  expect(myList.find('First')).toBe(0);
  expect(myList.find('Third')).toBe(1);
});

test('List removeAt() updates head correctly if removed on index 0', () => {
  myList.append('First');
  myList.append('Second');
  myList.append('Third');
  myList.removeAt(0);
  expect(myList.head).toEqual({ data: 'Second', next: { data: 'Third', next: null }});
});

test('List removeAt() updates tail correctly if last item is removed', () => {
  myList.append('First');
  myList.append('Second');
  myList.append('Third');
  myList.append('Fourth');
  myList.removeAt(3);
  expect(myList.tail).toEqual({ data: 'Third', next: null });
});

test('List removeAt() updates size correctly', () => {
  myList.append('First');
  myList.append('Second');
  myList.append('Third');
  expect(myList.size).toBe(3);
  myList.removeAt(1);
  expect(myList.size).toBe(2);
  myList.removeAt(0);
  expect(myList.size).toBe(1);
  myList.removeAt(0);
  expect(myList.size).toBe(0);
});
