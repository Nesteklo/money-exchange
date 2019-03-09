// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var str;
    var Coins = {
        H: 0,
        Q: 0,
        D: 0,
        N: 0,
        P: 0,
      }

    if(currency <= 0){
        return {};
    }

    if(currency > 10000){
        str = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return str;
    }

    if((currency < 10000) && (currency > 0)){
        if((currency / 50) >= 1){
            Coins.H = (currency - (currency % 50)) / 50;
            currency = currency % 50;
        }
        if((currency / 25) >= 1){
            Coins.Q = (currency - (currency % 25)) / 25;
            currency = currency % 25;
        }

        if((currency / 10) >= 1){
            Coins.D = (currency - (currency % 10)) / 10;
            currency = currency % 10;
        }

        if((currency / 5) >= 1){
            Coins.N = (currency - (currency % 5)) / 5;
        }
        Coins.P = currency % 5;
        
        for (var index in Coins){
            if (Coins[index] == 0){
                delete Coins[index];
            }
            
        }

        return Coins;
    }

    /*  
        half-dollars = 50¢ 
        quarters = 25¢
        dimes = 10¢
        nickels = 5¢
        pennies = 1¢ 
        Return an object containing the minimum number of coins needed to make change

        makeExchange(0)  --> {}
        makeExchange(1)  --> {"P":1}
        makeExchange(43) --> {"Q":1,"D":1,"N":1,"P":3}
        makeExchange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
        makeExchange(9999999)  --> {error: "You are rich, my friend! We don't have so much coins for exchange"}
    */   
}
