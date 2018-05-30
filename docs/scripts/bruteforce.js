var index = 0;
var curPos = 0;
var wordB = "";

function findWordBruteForce(target){
    if(curPos<target.length){
        if(charset[index] == target[curPos]){
            wordB += charset[index];
            curPos++;
            index = 0;
        }
        else{
            index++;
        }
    }

    displayWord(document.getElementById("bruteWord"), wordB);
}