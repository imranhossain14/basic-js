function brickCalculator(floor){
var numberOfFloor = parseInt(floor);
        switch(true) {
            case numberOfFloor<0 : 
                return "Floor number cannot be negative";
                break;
            
            case numberOfFloor>0 && numberOfFloor<11 :
                var countBrick =numberOfFloor*1000*15;
                return countBrick;
                break;
                

            case numberOfFloor<20 && numberOfFloor>10 :
                    var countBrick =10*1000*15+(numberOfFloor-10)*1000*12;
                    return countBrick;


            case numberOfFloor>20  :
                        var countBrick =10*1000*15+10*1000*12+(numberOfFloor-20)*1000*10 ;
                        return countBrick;     
                        
            // default:
            //     var countBrick =1111 ;
            //             return countBrick; 
                    

        }
        
        return countBrick;

}

var result = brickCalculator(21);
console.log(result);



