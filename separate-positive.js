// add whatever parameters you deem necessary
// given an array of numbers, move all the positive numbers to the beginning of the array and all the negative numbers to the end of the array
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (num[left] < 0 && num[right] > 0) {
            [num[left], num[right]] = [num[right], num[left]];
            left++;
            right--;
        } else {
            if (num[left] > 0) {
                left++;
            } else {
                right--;
            }
        }

    }
    return nums;
}

