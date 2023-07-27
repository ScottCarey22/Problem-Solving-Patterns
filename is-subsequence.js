// add whatever parameters you deem necessary
// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;

    if (!str1) return true;
    while (str2IDdx < str2.length) {
        if (str2[str2Idx] === str1[str1Idx]) str1Idx++;
        if (str1Idx === str1.length) return true;
        str2Idx++;
    }
    return false;
}
