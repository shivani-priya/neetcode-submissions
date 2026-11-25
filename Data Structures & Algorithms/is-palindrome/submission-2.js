class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(character) {
        return (character >= "a" && character <= "z") ||
            (character >= "A" && character <= "Z") ||
            (character >= "0" && character <= "9");
    }
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            while(left < right && !this.isAlphaNumeric(s[left])){
                left++;
            }
            while(left < right && !this.isAlphaNumeric(s[right])){
                right--;
            }
            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;

    }
}
