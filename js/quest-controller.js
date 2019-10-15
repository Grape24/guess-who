'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start button, .game-start h2').hide();
    renderQuest();
}

function renderQuest() {
    debugger
    $('.quest').show();
    $('.quest h2').text(gCurrQuest.txt);
}

function onUserResponse(res){
    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            $('button.btn.btn-info').attr('data-toggle','modal');
            $('button.btn.btn-info').attr('data-target','#exampleModal');
            $('.modal-body').text('Yes! I knew it!');
            $('.modal-header').text('🏆');

        } else {
            $('button.btn.btn-danger').attr('data-toggle','modal');
            $('button.btn.btn-danger').attr('data-target','#exampleModal');
            $('.modal-body').text('Alright, than teach me!');
            $('.modal-header').text('😌');
            $('.new-quest').show();

        }
    } else {
        $('button.btn.btn-danger').removeAttr('data-toggle','modal');
        $('button.btn.btn-danger').removeAttr('data-target','#exampleModal');
        gLastRes = gCurrQuest;
        moveToNextQuest(res);
        renderQuest();
    }
    
}

function onAddGuess() {
    var $newGuessTxt = $('input#newGuess.form-control').val()
    var $newQuestTxt = $('input#newQuest.form-control').val()
    addGuess($newQuestTxt, $newGuessTxt);
    onRestartGame();
}


function onRestartGame() {
    gCurrQuest = gQuestsTree;
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    gPrevQuest = null;
    renderQuest();
}



