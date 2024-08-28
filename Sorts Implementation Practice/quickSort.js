function quickSort(arr, low = 0, high = arr.length - 1) {
    // Base case: If the array has one or zero elements, it is already sorted
    if (low >= high) return;

    // Choose the pivot (we'll use the middle element here)
    const pivotIndex = Math.floor((low + high) / 2);
    const pivot = arr[pivotIndex];

    // Initialize left and right pointers
    let left = low;
    let right = high;

    // Partitioning step
    while (left <= right) {
        // Move the left pointer to the right while values are less than the pivot
        while (arr[left] < pivot) left++;

        // Move the right pointer to the left while values are greater than the pivot
        while (arr[right] > pivot) right--;

        // If the pointers have not crossed, swap elements
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    // Recursively apply the same logic to the left and right sub-arrays
    quickSort(arr, low, right);
    quickSort(arr, left, high);
}

// Testing
const array = [64, 34, 25, 12, 22, 11, 90];
quickSort(array);
console.log(array); //[11, 12, 22, 25, 34, 64, 90]