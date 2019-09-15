import { Sorter } from '../Sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const tmp = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = tmp;
  }

  print(): void {
    console.log(this.data);
  }

  get length(): number {
    return this.data.length;
  }
}
