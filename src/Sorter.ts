export interface Sortable {
  length: number;
  print(): void;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export abstract class Sorter {
  abstract compare(lIdx: number, rIdx: number): boolean;
  abstract swap(lIdx: number, rIdx: number): void;
  abstract length: number | null;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
