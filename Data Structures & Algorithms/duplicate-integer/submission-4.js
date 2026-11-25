class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numberSet = new Set();
        for(let index = 0;index<nums.length ; index++){
            if (numberSet.has(nums[index])){
                return true;
            }else{
                numberSet.add(nums[index]);
            }
        }
        return false;
    }
}
