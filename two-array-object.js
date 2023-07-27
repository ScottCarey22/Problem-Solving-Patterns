// add whatever parameters you deem necessary
// convert the keys and values of the two arrays into an object
// the keys should be the elements of the first array
// the values should be the elements of the second array
// if the second array is shorter than the first, the remaining keys should have a value of null
// if the first array is shorter than the second, the remaining values should be ignored
// return the object
function twoArrayObject(keys, values) {
    return keys.reduce((obj, key, index) => {
        obj[key] = values[index] || null;
        return obj;
    }
        , {});

}
