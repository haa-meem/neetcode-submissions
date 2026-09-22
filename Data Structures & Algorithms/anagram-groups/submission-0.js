class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join("");
            if (groups[key]) {
                groups[key].push(strs[i]);
            } else {
                groups[key] = [strs[i]];
            }
        }
        return Object.values(groups);
    }
}
