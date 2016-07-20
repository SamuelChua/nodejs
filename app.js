$(function() {
 // code for clicking button .etc
    $.get("/jokes",function(data){
        alert(data.setup);
        alert(data.punchline);
    },"json");
});
