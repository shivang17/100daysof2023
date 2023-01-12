// Some of the common data structure in JS

// Stack => we do not have a stack class so we will use array as a Stack
// LIFO
const stack = [];

stack.push(1);
stack.push(2);
console.log(stack.pop());// This will pop off number 2 from the array


// Similar to stack, you can use array for queue as well:

// Queue is First in First Out (FIFO) method:

// Shift method is less efficient than pop. 

// Shift is O(n) as opposed to O(1) which we expect from any dequeue method.

// With modern browsers, you don't need to worry about it much. 
// If this remains a performance issue, you can use linked list instead of an array to build the queue. 



// Let's talk about map or dictonaries. 
// There are two options for that:
// 1) You can use JS objects as maps or you can use actual map class.

const map = new Map();

map.set('name', 'Shivang');
console.log("Map", map);

map.set('name', 'Yagnik');
map.set(10, 'ten'); // This is the difference between using object and map class. When you are using an object, the key should be of type string but not neccessarily in case of the map


console.log("Updated Map", map);

// In order get the values from the map, we can use get method.

console.log(map.get('name'));

// You can get the size of the map by using size property (remember it is not a method and hence no function call)
console.log(map.size);

// Check if a particular key exists in the map

console.log(map.has('text'));

// If you have an empty object as the key of the map and you apply a has method and compare an empty object, it will return false because they are both different object by reference. 

// So, if you want the has to return false. You would need to create an empty object using a variable initialization and then pass in the variable in has function.

// So, objects aren't compared with just value but checking whether they are exactly the same object. 


// Delete method:

map.delete('name');
console.log("Name key deleted", map);

// Clear method: map.clear(); this will remove everything from the key

// map.clear();
// console.log("Empty map: ", map); // OR you can verify by checking map.size returning 0.

// Iterate through map:

for ([key,value] of map){
    console.log(key, value);
}

// You can use forEach which takes in a callback function. 


// map.forEach((key, value)=>{
//     console.log(key, value)
// })

/* 
    map.forEach(function(key, value){
        console.log(key, value)
    })
*/

const iter = map.entries();
console.log(iter.next().value);
console.log(iter.next().value);

// If you just want keys or just the values, you can use 
// map.keys() or map.values() and then .next() and .value()


// Let's try to understand when should we use map v/s objects.

// Most of the time, it doesn't matter BUT if you want a key that is not a string or a symbol, you should use map

// Additionally, if you are concerned about iterating through the map in insertion order, you'll want to use a map. 

// Map is always going to kept in order that elements were added in the map. 

// Object can be used if you have very simple things: It will be quicker to instantiate an object

// Secondly, if you are sending the object to the server via JSON, you will need to use an Object as map is not seralizable to JSON.

// Thirdly, if you need to manually prototype chain

// If you have data already in arrays in the format that we tend to get when we iterate through the map, you can pass it to the constructor as a way to instantiate the map with values. 

/* 
    const map = new Map ([["name", "Shivang"], ["ten",10]]); You pass in a two dimensional array in which each array is key-value pair
*/


// Sets:

// Sets are very similar to Maps: It is a key-value pair with 


const set = new Set();

// Two ways to add values to the set.
set.add(123);
set.add(456);

/* 
    We can pass in a one-dimensional array to the constructor als the values (It isn't two-dimensional array because this doesn't have key and value both)

    There's not get method as set doesn't have keys.
    But you can check if an element is present in the set by doing

    console.log(set.has(123))// true
    console.log(set.has("Shivang")); // false
*/

// just like maps, if we add an empty object and check with has method, it will say false as it is not the same object. 

// You can do delete and clear.

// delete will need a value that needs to be deleted from the set.

// clear will just clear everything from the set at once. 

// Iterate through the set, just like maps

for (value of set) {
    console.log(value);
}

// forEach function

set.forEach(value =>{
     console.log(value);
})

// We can get an iterator too:


/* 

const iter = set.values();

console.log(iter.next().value);

We can use entries and keys too with set. For keys, it will give the same as values and for entries it will return an array with two elements

[123,123];

So, you can esentially think of set iterators as like iterating through a map only the values in the map are same thing as ke

The best way to use set in JS is:

To remove duplicates from an array

You can pass in the iterable set within Array.from which converts back into array

const arr = [1,2,2,3,4];

Array.from(new Set(arr));
JS sets maintain the order. So, we will get the array in right order


WeakSet and WeakMap:

WeakSet works almost similar to set. However, there are two key differences:

-> keys can only be objects in case of weakMap and values can only be object in case of weakSet


So, let's say we have:

const weakSet = new WeakSet(); and you try to add a non-object value to the set, it will throw an error

weakSet.add(123); error

weakSet.add({});

What is purpose of weakSet?

weakSet doesn't prevent garbage collection.

Traditionally, in a set or a map, if you have object then that object cannot be garbage collected because there's a reference to it
The set or map is still using that object. So, it cannot be garbage collected. BUT there are times you want the garbage collector to work as usual and it should be removed from set or map once it's garbage collected

If the object is garbage collected, it is just removed from the weak set

Let's create a scope:

(function(){
    const obj = {};
    weakSet.add(obj);
})();

The object here could be potentially garbage collected

In the case this was a normal set, the object would not be garbage collected because it is still in the set. However, with a weak set the object will be removed with garbage collection

We cannot iterate over a weak set or weak map and there is no actual size property for them

*/


/* 

    So. these were the data structures that you were pecuilar and provided by JS. Rest of them, you would need to implement it using a class or get it from a library

*/

// Implementing LL:

// Define a class:


