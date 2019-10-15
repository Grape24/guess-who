var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;


function createQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    if (localStorage.getItem('questionsTree')===null){
        saveTree();
    }
    gQuestsTree = getTree();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    debugger
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    debugger
    var newQuest = createQuest(newQuestTxt);
    var newGuess = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;
    newQuest.yes = newGuess;
    if(gPrevQuest.no === gCurrQuest){
    gPrevQuest.no = newQuest;
    }else gPrevQuest.yes = newQuest;
    saveTree();
}

function saveTree(){
    localStorage.setItem('questionsTree', JSON.stringify(gQuestsTree));
}

function getTree(){
   gQuestsTree =  JSON.parse(localStorage.getItem('questionsTree'));
   return gQuestsTree;
}


