// add whatever parameters you deem necessary
// given two positive integers, find out if the two numbers have the same frequency of digits
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }

    for (let j = 0; j < str2.length; j++) {
        obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
    }

    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}
