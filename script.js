/**
 * Created by adson_silva on 30/11/16.
 */

var trashIco = '<span class="glyphicon glyphicon-trash deleteTask"></span>';
var checkbox = '<input name="input" class="completeTask" type="checkbox" id ="check">';

var checkBoxes, boxesChekeds;

$(document).ready(function () {


    $('#addTask').on('click', addTask);
    $('#tasks').on('change','.completeTask', completeTask);
    $('#tasks').on('click', '.deleteTask', deleteTask);
    updateProgressTasks();

    function addTask() {
        var newTaskText = $('#newTask').val();
        $('#newTask').val("");
        appendTask(newTaskText);

    };

    function appendTask(newTaskText) {
        $('#tasks').append('<li>' + checkbox + newTaskText + trashIco + '</li>');
        updateProgressTasks();
    }

    function completeTask() {
        $(this).parent().toggleClass('done');
        updateProgressTasks();
    }
    
    function deleteTask() {
        $(this).parent().remove();
        updateProgressTasks();
    }

    function updateProgressTasks() {
        countCheckBox();
        var percent = String(calculatePercent()) + '%';
        $(".progress-bar").width(percent);
        $("#textPercent").text('Progress: ' + percent);


    }

    function countCheckBox() {
        var inputs, i;

        checkBoxes = 0;
        boxesChekeds = 0;
        inputs = document.getElementsByTagName('input');

        for(i = 0; i < inputs.length; i++){
            if(inputs[i].type == 'checkbox' && inputs[i].id == 'check'){
                checkBoxes++;
                if(inputs[i].checked == true){
                    boxesChekeds++;
                }
            }
        }

    }
    
    function calculatePercent() {
        if(checkBoxes == 0){
            return 0;
        }
        var percent = (100 * boxesChekeds)/checkBoxes;
        return parseInt(percent);
    }



});