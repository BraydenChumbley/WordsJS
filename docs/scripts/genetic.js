//var fitness = [];

var popG = [];

function findWordGenetic(target){

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
            popG.push(new Word(newWord, 0));
        }
    }

    for(var i = 0; i < popG.length; i++){
        popG[i].fitness = calcFitness(target, popG[i].word);
    }

    console.log(popG);
}

class Word{

    constructor(word, fitness){
        this.word = word;
        this.fitness = fitness;
    }

}

function calcFitness(target, word){

    var tempFit = 0;

    var maxCharFit = 100/target.length;

    for(var t = 0; t < target.length; t++){
        for(var w = 0; w < word.length; w++){
            var wordChar = word[w];
            var targetChar = target[t];
            if(wordChar == targetChar){
                if(t==w){
                    tempFit += maxCharFit;
                }
                else{
                    tempFit += maxCharFit/2;
                }
            }
            else if(wordChar.toLowerCase() == targetChar || wordChar.toUpperCase() == targetChar){
                if(t==w){
                    tempFit += maxCharFit/2;
                }
                else{
                    tempFit += (maxCharFit/2)/2;
                }
            }
        }
    }

    return tempFit;

}

function reproduce(prnt1, prnt2){

    var total = prnt1

}