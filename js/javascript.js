$(document).ready(function () {
    var termin = false;
    $('#formular').submit(function (event) {
        event.preventDefault();
        //Formular
        if (termin) {
            alert('Sie haben schon einen Termin gebucht!\nWenn sie ihren Termin ändern möchten stornieren sie ihren alten.');
        } else {
            termin = true;
            $('.hide').show();
            $('#stornotermin').hide();
            $('#terminadd').append('<td>' + $('#fname').val() + '</td>' +
                '<td>' + $('#name').val() + '</td>' +
                '<td>' + $('#datum').val() + '</td>' +
                '<td>' + $('#anzahl').val() + '</td>' +
                '<td>' + $('#zeit').val() + '</td>');

            $('input').val('')
            $('input[type="submit"]').val('Jetzt Reservieren')
        }
    });
    $('#storno').click(function () {
        termin = false
        $('#terminadd').empty();
        $('.hide').hide();
        $('#stornotermin').show();
    });
});