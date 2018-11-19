$(document).ready(function () {
    $("#right1").css("display","none");
    $("#right2").css("display","none");
    $("#right3").css("display","none");

    $("#selectmenu").click(function () {
        // $("#right0").css("display","none");
        $("#right1").css("display","block");
        // $("#selectmenu").css("background-color","#5890cf");
        $("#right2,#right0").css("display","none");
        $("#right3").css("display","none");
    })

    $("#addmenu").click(function () {
        $("#right0").css("display","none");
        $("#right1").css("display","none");
        $("#right2").css("display","flex");
        // $("#addmenu").css("background-color","#5890cf");
        $("#right3").css("display","none");
    })

    $("#updatemenu").click(function () {
        $("#right0").css("display","none");
        $("#right1").css("display","none");
        $("#right2").css("display","none");
        $("#right3").css("display","flex");
        // $("#updatemenu").css("background-color","#5890cf");
    })

})