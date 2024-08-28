//sort function 

function mergeSort(arr) {
    //Check if the input is length 1 or less
    if (arr.length <= 1) {
        return arr; // Step 2: It's already sorted
    }

    //Divide the array in half
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //Recursively sort the left and right halves
    return merge(mergeSort(left), mergeSort(right)); //Merge the halves together
}


//merge function
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //While there are still values in each array
    while (leftIndex < left.length && rightIndex < right.length) {
        //Compare the first values of each array
        if (left[leftIndex] < right[rightIndex]) {
            // Add the smaller value to the return array
            result.push(left[leftIndex]);
            leftIndex++; //Move the pointer to the next value in the left array
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Move the pointer to the next value in the right array
        }
    }

    // Add any remaining values from left or right array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Testing
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(array)); // [11, 12, 22, 25, 34, 64, 90]
