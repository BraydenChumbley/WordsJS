//var fitness = [];

var popG = [];

var mutateRate = 0.2;

function findWordGenetic(target){

    console.log(popG == [0]);

    if(popG.length == 0){ //Run only if population doesn't exist yet
        for(var i = 0; i < 10; i++){
            var newWord = "";
            for(var n = 0 ; n < target.length; n++){
                var newChar = charset[Math.floor(Math.random()*charset.length)];
                newWord += newChar;
            }
            popG.push(new Word(newWord, 0));
        }
    }

    for(var i = 0; i < popG.length; i++){
        popG[i].fitness = calcFitness(target, popG[i].word); //Calculates fitness of each Word object
    }

    //awesomemrhi

    popG.sort(function(a, b){return b.fitness - a.fitness}); //Sort array by fitness scores

    displayWord(document.getElementById("geneticWord"), popG[0].word);

    if(popG[0].word == target){ //If the word has been found
        console.log("found word");
        clearInterval(loopID);
    }

    console.log(popG);

    var tempPopG = [];

    for(var i = 0; i < popG.length; i++){
        tempPopG[i] = reproduce(popG[0], popG[1]);
    }

    popG = tempPopG;

}

class Word{

    constructor(word, fitness){
        this.word = word;
        this.fitness = fitness;
    }

}

function calcFitness(target, word){

    var tempFit = 0;

    //640

    var maxCharFit = 100/target.length;

    for(var t = 0; t < target.length; t++){
        var bestFit = 0;
        for(var w = 0; w < word.length; w++){
            var wordChar = word[w];
            var targetChar = target[t];
            if(wordChar == targetChar){
                if(t == w){
                    bestFit = Math.max(maxCharFit, bestFit);
                    continue;
                }
                else{
                    bestFit = Math.max(maxCharFit/2, bestFit);
                    continue;
                }
            }
            else if(wordChar.toLowerCase() == targetChar || wordChar.toUpperCase() == targetChar){
                if(t == w){
                    bestFit = Math.max(maxCharFit/2, bestFit);
                    continue;
                }
                else{
                    bestFit = Math.max((maxCharFit/2)/2, bestFit);
                    continue;
                }
            }
        }
        tempFit += bestFit;
    }

    return tempFit;

}

function reproduce(prnt1, prnt2){

    var total = prnt1.fitness + prnt2.fitness;

    var prnt1Chance = prnt1.fitness / total;
    var prnt2Chance = prnt2.fitness / total;

    var wordLength = prnt1.word.length;

    var tempWord = "";

    for(var i = 0; i < wordLength; i++){
        if(Math.random() <= prnt1Chance){
            if(Math.random() <= mutateRate){
                var newChar = charset[Math.floor(Math.random()*charset.length)];
                tempWord += newChar;
            }
            else{
                tempWord += prnt1.word[i];
            }
        }
        else{
            if(Math.random() <= mutateRate){
                var newChar = charset[Math.floor(Math.random()*charset.length)];
                tempWord += newChar;
            }
            else{
                tempWord += prnt2.word[i];
            }
        }
    }

    return new Word(tempWord, 0);

}