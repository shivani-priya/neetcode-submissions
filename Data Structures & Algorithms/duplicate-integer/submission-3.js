class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        for(let index=0; index<nums.length; index++){
                if(nums[index]===nums[index+1]){
                return true;
                }
            
        }
        return false;
    }
}
