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
                $('#addUser td input').val('');
            }
            else {
                alert('Error: ' + response.msg);
            }
        });
    });
});