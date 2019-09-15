import { Sorter } from '../Sorter';

class Node {
  _next: Node | null = null;
  constructor(public _value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  constructor() {
    super();
  }

  add(val: number): void {
    let node: Node = new Node(val);
    if (this.head == null) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail._next) {
      tail = tail._next;
    }
    tail._next = node;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    const n1 = this.getNode(leftIdx);
    const n2 = this.getNode(rightIdx);
    if (n1 == null) return true;
    if (n2 == null) return false;
    return n1._value > n2._value;
  }

  swap(leftIdx: number, rightIdx: number): void {
    const n1 = this.getNode(leftIdx);
    const n2 = this.getNode(rightIdx);
    let tmp = n1._value;
    n1._value = n2._value;
    n2._value = tmp;
  }

  get length(): number {
    if (this.head === null) return 0;
    let listLength = 0;
    let tmp = this.head;
    while (tmp) {
      listLength++;
      tmp = tmp._next;
    }
    return listLength;
  }

  print(): void {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp._value + ' ');
      tmp = tmp._next;
    }
  }

  private getNode(idx: number): Node {
    if (idx < this.length && idx >= 0) {
      let currIdx = 0;
      let tmp = this.head;
      while (currIdx !== idx) {
        currIdx++;
        tmp = tmp._next;
      }
      return tmp;
    }
    return null;
  }
}
