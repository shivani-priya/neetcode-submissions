class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let maxProfit = 0;
        for(let index=0; index<prices.length; index++){
            for(let index2=index + 1; index2<prices.length; index2++){
                
               profit =  prices[index2] - prices[index];
               maxProfit= Math.max(profit, maxProfit);
            }
        }
        return maxProfit;
    }
}
