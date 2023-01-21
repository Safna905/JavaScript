$(document).ready(function () {
    console.log("jQuery");

//     $('#d').text('cooldhgfausyhu');

//     $('#d').empty();

//     $('#ta').text("am cool.....");

//     $('#d').val("you are bad");

//     //$('#ta').val("you are bad");

//     $('#d').text("cool & hot dhgfausyhugood morning");
//     //$('#d').remove();
// /
//     $('#ta').html("wow....what a wonderful world");

//     $('#d').css('background-color', 'red');

    $('#d').addClass('c');
    $('#d').removeClass();

    $('#btn').click(function() {
        var txt=" ";
        txt +="width:"+$('#d').width();
        txt +="height:" +$('#d').height();
        $('#d').html(txt);
    })

});
