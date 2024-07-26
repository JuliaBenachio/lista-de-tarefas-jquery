$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa-adicionada').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-adicionada').val('');
    })
    $('#lista-afazeres').on('click', function() {
        $('li').css("text-decoration", "line-through");
    })
})