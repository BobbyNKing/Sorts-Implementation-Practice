function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        //Set MIN to current index
        let minIndex = i;

        //Search for the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the element at index i
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]