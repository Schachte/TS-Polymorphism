import { Sorter } from '../Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    let data = this.data.split('');
    let tmp = this.data[leftIdx];
    data[leftIdx] = data[rightIdx];
    data[rightIdx] = tmp;
    this.data = data.join('');
  }

  print(): void {
    console.log(this.data);
  }

  get length(): number {
    return this.data.length;
  }
}
