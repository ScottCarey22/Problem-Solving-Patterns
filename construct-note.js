// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageObj = {};
    const lettersObj = {};

    // create an object with the letters of the message as keys and the number of times they appear as values
    for (let char of message) {
        messageObj[char] = (messageObj[char] || 0) + 1;
    }

    // create an object with the letters of the letters as keys and the number of times they appear as values
    for (let char of letters) {
        lettersObj[char] = (lettersObj[char] || 0) + 1;
    }

    // compare the two objects
    for (let key in messageObj) {
        if (!(key in lettersObj)) {
            return false;
        }
        if (lettersObj[key] < messageObj[key]) {
            return false;
        }
    }
    return true;
}