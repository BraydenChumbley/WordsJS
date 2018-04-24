var fitness = [];

function findWordGenetic(target){
    console.log(target);

    console.log(10/3)

    var popG = [];

    if(popG = []){
        for(var i = 0; i < 10; i++){
            var newWord = "";
            for(var n = 0 ; n < target.length; n++){
                var newChar = charset[Math.floor(Math.random()*charset.length)];
                if(Math.floor(Math.random()*2) == 1){
                    newWord += newChar.toUpperCase();
                }
                else{
                    newWord += newChar.toLowerCase();
                }
            }
            console.log("Newword: " + newWord);
            popG.push(newWord);
        }
    }
}

function calcFitness(target, word){

    for(var i = 0; i < target.length; i++){
        console.log(10/3);
    }

}