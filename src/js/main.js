$(".burger-icon").click(function(){
    $("#mySidenav").animate({ width:'250px'},500)
    $(".burger-icon").animate({marginLeft :'252px'},500)
   
})
$(".closebtn").click(function(){
    $("#mySidenav").animate({ width:'0px'},500)
    $(".burger-icon").animate({marginLeft :'0px'},500)
})



$('section .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


$(document).ready(_=>{
    let countDownDate = new Date("aug 31, 2024 23:59:59").getTime();
   
    let x = setInterval(_=>{
        let now = new Date().getTime();

        let distance = countDownDate - now ;

        let days = Math.floor(distance / (1000 * 60 * 60 *24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24 ))/ (1000*60*60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        $(".day").text(days + " d");
        $(".hour").text(hours + " h")
        $(".min").text(minutes + " m")
        $(".second").text(seconds + " s")

        if(distance < 0){
            clearInterval(X)
            $(".timer-container").html("expired")
        }
    } , 1000)

})



$(".message").keyup(function(){
    let count = 100 - $(this).val().length;
    if (count<0){
        count = 0
    }
    $(".countdown").text(left)
})