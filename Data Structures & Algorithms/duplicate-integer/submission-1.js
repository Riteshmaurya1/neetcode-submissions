class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums);
        const uniqueSet = [...unique];
        return (uniqueSet.length !== nums.length);
    }
}
