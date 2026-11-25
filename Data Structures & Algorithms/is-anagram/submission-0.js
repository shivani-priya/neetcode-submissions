class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charMap1 = new Map();
        let charMap2 = new Map();
        if(s.length !== t.length)return false;
        for(let index=0; index<s.length; index++){
            if(!charMap1.has(s[index])){
                charMap1.set(s[index],  1)
            }else{
                charMap1.set(s[index], charMap1.get(s[index])+ 1)
            }
        }
        for(let index=0; index<t.length; index++){
            if(!charMap2.has(t[index])){
                charMap2.set(t[index],  1)
            }else{
                charMap2.set(t[index], charMap2.get(t[index])+ 1)
            }
        }
        for (const key of charMap1.keys()) {
            if(charMap1.get(key) != charMap2.get(key)){
                return false;
            }
        
        }
        return true;

    }
}
