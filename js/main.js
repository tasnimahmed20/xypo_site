$(document).ready(function() {

    $('#openBtn').click(function() {
        $(this).hide();
        $("#closeBtn").show()
        $('#sideNav').css({ "right": "0px", "transition": "0.5s" });

    });
    $('#closeBtn').click(function() {
        $(this).hide();
        $("#openBtn").show()
        $('#sideNav').css({ "right": "-250px", "transition": "0.5s" });

    });




});