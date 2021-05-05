//1
//function filterOutOdds(){
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num){
//         return num % 2 === 0
//     });
// }

//Refactored using rest and arrow functions
const filterOutOdds = (...arguments) => arguments.filter((num) => num % 2 === 0);

//findMin
const findMin = (...nums) => nums.reduce((min, nextValue) => min > nextValue ? nextValue : min); 

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (array, ...nums) => ([...array, ...nums.map(value => value * 2)]);

//Slice and Dice
//removeRandom
const removeRandom = (items) => {
    let randomItem = Math.floor(Math.random() * items.length);
    let newItems = [...items.slice(0,randomItem), ...items.slice(randomItem + 1)];
    return newItems;
}

//extend
const extend = (array1, array2) => ([...array1, ...array2]);

//addKeyVal
const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}

//removeKey
const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;
}

//combine
const combine = (obj1, obj2) => {
    let newObject = ({...obj1, ...obj2});
    return newObject;
}

//update
const update = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}