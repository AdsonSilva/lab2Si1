/**
 * Created by adson_silva on 30/11/16.
 */

var trashIco = '<span class="glyphicon glyphicon-trash deleteTask"></span>';
var checkbox = '<input name="input" class="completeTask" type="checkbox" id ="check">';

var checkBoxes, boxesChekeds;

$(document).ready(function () {

    init();
    $('#addTask').on('click', addTask);
    $('#tasks').on('change','.completeTask', completeTask);
    $('#tasks').on('click', '.deleteTask', deleteTask);
    updateProgressTasks();
    
    $('#changeBackground').on('click', changeBG);
    $('#increaseFont').on('click', increaseFont);
    $('#decreaseFont').on('click', decreaseFont);
    $('#reset').on('click', reset);
    $('#newList').on('click', newList);
    
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


    function changeBG() {
        $('body').css("background-color","#dccfd8");
    }

    function increaseFont() {
        $('body').css({"font-size":"20px"});
    }

    function decreaseFont() {
        $('body').css({"font-size":"14px"});
    }

    function reset() {
        $('body').css("background-color","#ffffff");
        $('body').css({"font-size":"14px"});
    }

    function init() {
        appendTask('Desligar o farol do carro');
        appendTask('Fazer compras');
        appendTask('Assistir Harry Potter e os bichos');
    }
    
    function newList() {
        $.ajax({
            type: 'GET',
            url: 'http://192.168.130.215:8080/todoList/getById/5899c79087dc8d1980e5cce0',
            success: function (data) {
                alert("Name: " + data.name);
            },
            error: function (erro) {
                console.log("erro: " + JSON.stringify(erro));
                //console.log(data);
            }
        });
    }


});