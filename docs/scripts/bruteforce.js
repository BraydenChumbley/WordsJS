var popB = []

function findWordBruteForce(target){
    if(!popB.includes(target)){

        popB = [];

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
            popB.push(newWord);
        }

        displayWord(document.getElementById("bruteWord"), popB[0]);

        if(popB.includes(target)){
            displayWord(document.getElementById("bruteWord"), popB.indexOf(target));
        }

    }
}