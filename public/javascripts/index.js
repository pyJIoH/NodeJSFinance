$(document).ready(function () {
    $('#add').on('click', function (event) {
        event.preventDefault();

        var newRow = {
            title: $('#title').val(),
            income: $('#income').val(),
            outcome: $('#outcome').val(),
            profit: $('#profit').val()
        }

        $.ajax({
            type: 'POST',
            data: newRow,
            url: '/add',
            dataType: 'JSON'
        }).done(function (response) {
            if (response.msg === '') {
                $('td input').val('');
                //add a row, response.data
            }
            else {
                alert('Error: ' + response.msg);
            }
        });
    });

    $('.btn-remove').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            type: 'DELETE',
            url: '/delete/' + $(this).attr('id')
        }).done(function (response) {
            if (response.msg === '') {
            //delete a row
            }
            else {
                alert('Error: ' + response.msg);
            }
        });
    });
});