$(document).ready(function(){
    $("button").click(function(){
        var element1 = document.getElementById("date_from");
        var result = element1.value;

        $.get("http://homel.vsb.cz/~zao034/via/weather.php", {
            format: "json",
            type: "hour",
            from: "30.07.2014",
            to: "31.07.2014"
        }).done(function(data){
            alert( "Data Loaded: " + data );

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

