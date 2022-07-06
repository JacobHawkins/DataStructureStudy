/**
Biggest Difference between the two is that static is of a fixed length. Dynamic is capable of shrinking/growing. Static arrays are typcially used to construct dynamic arrays.

1) Create a static array with an initial capacity.
2) Add elements to the underlying static array, keeping track of the number of elements.
3) If adding another element will exceed the capacity, then create a new static array with twice the capscity and copy the original elements into it.
 */

let staticArrayLengthFour = [0, 1, 2, 3];
let staticArrayLengthNone = [];

//What happens when we give a static array of length two, two values?

let staticArrayLengthTwo = [0, 3];

//Computer
