function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Continue sorting while swaps are happening
    while (true) {
        swapped = false; // Assume no swaps occurred in this pass
        
        // Traverse the array from the beginning to the second-to-last element
        for (let i = 0; i < n - 1; i++) {
            // Compare current element with the next element
            if (arr[i] > arr[i + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // A swap occurred
            }
        }
        
        // Reduce the range of the next pass
        n--;
        
        // If no swaps occurred, the array is sorted
        if (!swapped) break;
    }

    return arr; // Return the sorted array
}

// Testing
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); //[11, 12, 22, 25, 34, 64, 90]