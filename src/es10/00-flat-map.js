
const array = [1, 1, 1, 2, 3, 4, [1, 3, 5, 4, 7, [1, 2, 4]]];
console.log(array.flat(3));

// FlatMap

const array2 = [1, 2, 3, 4, 5, 6];
console.log(array2.flatMap(v => [v, v * 2]));


const array3 = [1, 2, 3, 4, 5, 6];
console.log(array3.flatMap(v => [v * 2]));
