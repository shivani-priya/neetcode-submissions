class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums, target) {
        let left = 0;
        let right= nums.length - 1; //5
        while(right >= left){ //5>2 //5 >3
            let mid = Math.floor((left + right) / 2); //2 //4
            if(nums[mid]==target){
                return mid
            }else if(target > nums[mid]){
                left = mid + 1; //3
            }else{
                //
                right = mid - 1; //3
            }
            
        }
        return -1;
        

    }
}
