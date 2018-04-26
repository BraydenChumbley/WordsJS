var popS = []

var bestWord;

function findWordStratRandom(target){

    if(popS.length == 0){
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
            popS.push(newWord);
        }
    }

    if(popB.includes(target)){
        displayWord(document.getElementById("stratWord"), popB.indexOf(target));
        return;
    }

    for(var i = 0; i < popS.length; i++){
        popS[i] = newPopulation(target, popS[i]);
    }

    displayWord(document.getElementById("stratWord"), popB[0]);

}

function newPopulation(target, word){
    var newWord = "";
    for(var t = 0; t < target.length; t++){
        for(var w = 0; w < word.length; w++){
            var wordChar = word[w];
            var targetChar = target[t];
            if(wordChar == targetChar && t == w){
                newWord += wordChar;
            }
            else {
                var newChar = charset[Math.floor(Math.random()*charset.length)];
                if(Math.floor(Math.random()*2) == 1){
                    newWord += newChar.toUpperCase();
                }
                else{
                    newWord += newChar.toLowerCase();
                }
            } 
        }
    }

    return newWord;
}