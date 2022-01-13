function getMaximumProfit(prices) {
        let len= prices.length;
        
        let buyingFirst, profitFirst, buyingSecond, profitSecond, i;
        
        buyingFirst = buyingSecond = Math.max.apply(Math, prices);;
        
        profitFirst = profitSecond = 0;
 
        for (i = 0; i < len; i++) {
            buyingFirst = Math.min(buyingFirst, prices[i]);
 
           
            profitFirst = Math.max(profitFirst, prices[i] - buyingFirst);
 
           
            buyingSecond = Math.min(buyingSecond, prices[i] - profitFirst);
 
           
            profitSecond = Math.max(profitSecond, prices[i] - buyingSecond);
        }
        return profitSecond;
}
const arr = [3,3,5,0,0,3,1,4];
const profit = getMaximumProfit(arr);
console.log(profit);