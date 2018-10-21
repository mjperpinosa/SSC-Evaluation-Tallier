$(document).ready(function() {

    $("#toDevelop5").click(function() {
        var cur = $("#toDevelop5").val();
        $("#toDevelop5").val(parseInt(cur)+1);
    });

    $("#toDevelop4").click(function() {
        var cur = $("#toDevelop4").val();
        $("#toDevelop4").val(parseInt(cur)+1);
    });

    $("#toDevelop3").click(function() {
        var cur = $("#toDevelop3").val();
        $("#toDevelop3").val(parseInt(cur)+1);
    });

    $("#toDevelop2").click(function() {
        var cur = $("#toDevelop2").val();
        $("#toDevelop2").val(parseInt(cur)+1);
    });

    $("#toDevelop1").click(function() {
        var cur = $("#toDevelop1").val();
        $("#toDevelop1").val(parseInt(cur)+1);
    });
    //------------------------
    $("#toRecognise5").click(function() {
        var cur = $("#toRecognise5").val();
        $("#toRecognise5").val(parseInt(cur)+1);
    });

    $("#toRecognise4").click(function() {
        var cur = $("#toRecognise4").val();
        $("#toRecognise4").val(parseInt(cur)+1);
    });

    $("#toRecognise3").click(function() {
        var cur = $("#toRecognise3").val();
        $("#toRecognise3").val(parseInt(cur)+1);
    });

    $("#toRecognise2").click(function() {
        var cur = $("#toRecognise2").val();
        $("#toRecognise2").val(parseInt(cur)+1);
    });

    $("#toRecognise1").click(function() {
        var cur = $("#toRecognise1").val();
        $("#toRecognise1").val(parseInt(cur)+1);
    });

    //-------------- to Encourage

    $("#toEncourage5").click(function() {
        var cur = $("#toEncourage5").val();
        $("#toEncourage5").val(parseInt(cur)+1);
    });

    $("#toEncourage4").click(function() {
        var cur = $("#toEncourage4").val();
        $("#toEncourage4").val(parseInt(cur)+1);
    });

    $("#toEncourage3").click(function() {
        var cur = $("#toEncourage3").val();
        $("#toEncourage3").val(parseInt(cur)+1);
    });

    $("#toEncourage2").click(function() {
        var cur = $("#toEncourage2").val();
        $("#toEncourage2").val(parseInt(cur)+1);
    });

    $("#toEncourage1").click(function() {
        var cur = $("#toEncourage1").val();
        $("#toEncourage1").val(parseInt(cur)+1);
    });

    //--------------

})

function gradClick(id) {
    var cur = $("#"+id).val();
    $("#"+id).val(parseInt(cur)+1);
}

function appendAnswer(answersContainer, answerSource) {
    $("#"+answersContainer).append("<li>"+$("#"+answerSource).val()+"</li>");
    $("#"+answerSource).val("");
}