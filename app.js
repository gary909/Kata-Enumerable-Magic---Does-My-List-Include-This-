function include(arr, item) {
    if (arr.includes(item)) {
        return true;
    } else {
        return false;
    }
}

console.log(include([1, 2, 3, 4], 3)); // true
console.log(include([1, 2, 4, 5], 3)); // false