$(function() {
    $("#getJoke").click(
        function() {
            $.get("/jokes",function(data){
                alert(data.setup);
                alert(data.punchline);
            },"json")
        }
        $('#upvote').on("click", function(){
            $.post("/upvote");
        });
        $('#downvote').on("click", function(){
            $.post("/downvote");
        });
        })
    );
});
