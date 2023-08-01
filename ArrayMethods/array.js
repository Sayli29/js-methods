console.log("array methods practice :]");

const arr = [1, 2, 3, 4];
console.log("array: ",arr)


// arr.length method
console.log("arr.length - array length:",arr.length);


// arr.toString() method returns all elements as single string
console.log("toString method: ", arr.toString());
console.log("length of return string: ",(arr.toString()).length);


//arr.push(element) method pushes element in array at end
arr.push(5);
console.log("arr.push(5) - pushed 5 as element in array: ", arr);


//arr.unshift(element) method pushes element in array at start
arr.unshift(0);
console.log("arr.unshift(0) - unshifted[add at start] 0 as element in array: ", arr); 


//arr.pop() method removes last element of array
arr.pop();
console.log("arr.pop() - removes the last element of array: ", arr);


//arr.shift() method removes the first element of array
arr.shift();
console.log("arr.shift() - removes the first element of array ", arr);


//arr.filter(function) method filter the elements which satisfy the condition
const filteredElements = arr.filter(elm => elm % 2 == 0);
console.log("arr.filter(function)- filter elements from array which are even: ", filteredElements);
// console.log(arr);


//arr.map(function) method transforms the array elements [no change in original array]
const transformedArray = arr.map(elm => elm*2);
console.log("arr.map(function) - maped each element of array and transformed elements by multiplying 2: ", transformedArray);
// console.log(arr);


//arr.join("separator") joins all element with that separator
//returns an array as string
const str_join = arr.join("*");
console.log("arr.join('*') - joning the elements of array with * separator: ", str_join);
// console.log(typeof str_join);


