// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}


