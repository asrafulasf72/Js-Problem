function isPalindrome(str){
    let convert = str.toLowerCase();
    let reversed = convert.split("").reverse().join("");

    return convert === reversed
}

console.log(isPalindrome("madam"))