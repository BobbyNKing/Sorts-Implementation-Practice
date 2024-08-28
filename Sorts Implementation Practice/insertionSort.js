function insertionSort(arr) {
    let n = arr.length;

    // If it is the first element, it is already sorted; return
    if (n <= 1) return arr;

    // Start from the second element
    for (let i = 1; i < n; i++) {
        // Pick the element to be inserted
        let key = arr[i];
        let j = i - 1;

        // Shift elements of the sorted sub-list that are greater than the key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }

    // The loop ends when the entire array is sorted
    return arr;
}

// Testing
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(array)); // [11, 12, 22, 25, 34, 64, 90]