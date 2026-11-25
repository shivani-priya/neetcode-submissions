class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDuplicate = false;
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i]===nums[j]){
                hasDuplicate = true
                return hasDuplicate;
                }
                else {
                    hasDuplicate = false;
                }
            // return hasDuplicate;
            }
            
        }
        return hasDuplicate;
    }
}
