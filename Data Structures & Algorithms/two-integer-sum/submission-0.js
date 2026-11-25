class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let indexMap = new Map();
    for(let index=0;index<nums.length;index++){
        if(indexMap.has(target - nums[index])){
            return [indexMap.get(target - nums[index]),index]

        }
     indexMap.set(nums[index], index)
    }
    }
}
