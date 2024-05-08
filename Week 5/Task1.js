function reverseArray(arr){
    const reversedArray = []
    for(let i = arr.length -1; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const originalArray = [1, 2, 3]
const reversedArray = reverseArray(originalArray);
document.write(reversedArray);