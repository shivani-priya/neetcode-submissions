class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //LIFO
    isValid(s) {
        let validArray = [];
        let closingToOpeningBracketsMap = new Map();
        let openingBrackets = new Set(['(', '{', '[']);
        // let closingBrackets = new Set([')', '}', ']']);
        
        closingToOpeningBracketsMap.set(')', '(');
        closingToOpeningBracketsMap.set('}', '{');
        closingToOpeningBracketsMap.set(']', '[');

        for(let index=0;index<s.length; index++){
            let currentBracket = s[index];
          if(openingBrackets.has(currentBracket)){
            validArray.push(currentBracket)
          }else{
            let openingBracketToCurrentBracket =                        closingToOpeningBracketsMap.get(currentBracket)
             if(validArray[validArray.length - 1] == openingBracketToCurrentBracket){
               validArray.pop()

             }else{
                return false;
             }
          }
        }
        return validArray.length == 0;
    }
}
