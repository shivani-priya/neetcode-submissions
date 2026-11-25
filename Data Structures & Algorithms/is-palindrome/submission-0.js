class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(character){
        return (character >= "a" && character <= "z") ||
            (character >= "A" && character <= "Z") ||
            (character >= "0" && character <= "9");
    }
    isPalindrome(s) {
        let validStr ="";
        for(let index=0;index <s.length;index++){
            if(this.isAlphaNumeric(s[index])){
                validStr = validStr + s[index].toLowerCase();
            }

        }
        let ReverseStr = validStr.split("").reverse().join("");

        if(validStr == ReverseStr){
            return true;
        }
        return false;
    }
}
