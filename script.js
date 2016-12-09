/**
 * Created by adson_silva on 30/11/16.
 */

var trashIco = '<span class="glyphicon glyphicon-trash deleteTask"></span>';
var checkbox = '<input name="input" class="completeTask" type="checkbox" id ="check">';

var progressBar = $(".progress-bar");

var checkBoxes, boxesChekeds;

$(document).ready(function () {


    $('#addTask').on('click', addTask);
    $('#tasks').on('change','.completeTask', completeTask);
    $('#tasks').on('click', '.deleteTask', deleteTask);

    function addTask() {
        var newTaskText = $('#newTask').val();
        $('#tasks').append('<li>' + checkbox + newTaskText + trashIco + '</li>');
        $('#newTask').val("");
    };


    function completeTask() {
        $(this).parent().toggleClass('done');
    }
    
    function deleteTask() {
        $(this).parent().remove();
        $('#textPercent').text('uhuuuuuul');
    }

    function updateProgressTasks() {
        countCheckBox();
        progressBar.width('30%');
    }

    function countCheckBox() {
        var inputs, i;

        checkBoxes = 0;
        boxesChekeds = 0;
        inputs = document.getElementsByTagName('input');

        alert(inputs.length);

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

    }



});