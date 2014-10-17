$(document).ready(function(){
    $("button").click(function(){

        var from = $("#date_from").val().split("-");
        var to = $("#date_to").val().split("-");
        var interval = $("#interval").val();

        $.get("http://homel.vsb.cz/~zao034/via/weather.php", {
            format: "json",
            type: interval,
            from: from[2]+'.'+from[1]+'.'+from[0],
            to: to[2]+'.'+to[1]+'.'+to[0]
        }).done(function(data){
            alert( "Data Loaded: " + data );
            console.log(data);


            $.each( data, function( index, hodnota ) {
                //var json = JSON.parse(data);
                console.log("sdfsdf");
            });
        });
    });
});




$(document).ready(function() {
    var date = new Date();

    var day_before = date.getDate()-1;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var yesterday = year + "-" + month + "-" + day_before;
    var today = year + "-" + month + "-" + day;

    $("#date_from").attr("value", yesterday);
    $("#date_to").attr("value", today);
});

