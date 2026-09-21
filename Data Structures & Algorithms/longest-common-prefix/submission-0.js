class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let out = "";
        for (let i = 0; i < strs[0].length; i++) {
            let match = true;
            for (let j = 0; j < strs.length - 1; j++) {
                if (strs[j][i] !== strs[j + 1][i]) {
                    match = false;
                    break;
                }
            }
            if (!match) {
                break;
            }
            out += strs[0][i];
        }
        return out;
    }
}
