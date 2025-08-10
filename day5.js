function larger(arr, n) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            newarr.push(arr[i]);
        }
    }
    return newarr; // return the new array
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(larger(arr, 5)); // [6, 7, 8]
