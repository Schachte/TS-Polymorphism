import { NumberCollection } from './Comparables/NumberCollection';
import { StringCollection } from './Comparables/StringCollection';
import { LinkedList } from './Data/LinkedList';

const NC = new NumberCollection([4, 3, 2, 1]);
const SC = new StringCollection('4321');
const LL = new LinkedList();
for (let i = 4; i >= 1; i--) LL.add(i);

// Before
NC.print();
SC.print();
LL.print();

console.log('\n\n');

// Sort
NC.sort();
SC.sort();
LL.sort();

console.log('\n\n');

// After
NC.print();
SC.print();
LL.print();
