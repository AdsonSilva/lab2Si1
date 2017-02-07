$(document).ready(function () {

    $('#createList').on('click', postCreateList);
    function postCreateList() {
        var formData = new FormData();
        formData.append("name",  document.getElementById("todoNameText"));

        $.ajax({
            type: 'POST',
            url: 'http://192.168.130.215:8080/todoList/create',
            crossDomain : true,
            dataType: 'application/json',
            data: formData,
            success: function (TodoLists) {
               alert("A new TodoList has been created ")
            },
            error: function (erro) {
                console.log("erro: " + JSON.stringify(erro));
                //console.log(data);
            }
        });
    }
})