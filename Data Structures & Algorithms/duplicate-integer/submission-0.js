class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let finalNums = nums.sort();
        for (let i = 0; i < finalNums.length; i++) {
            if (finalNums[i] == finalNums[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
