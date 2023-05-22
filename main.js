/*I've done a couple of research on this task 
https://www.youtube.com/watch?v=Srj2YPHjsn4
https://stackoverflow.com/questions/54348241/difficulty-creating-jquery-loop-to-repeatedly-change-background-color-and-animat
https://www.w3schools.com/jquery/jquery_chaining.asp
https://www.w3schools.com/jsref/met_win_setinterval.asp
I'm struggle to make the objects slide around*/


$(document).ready(function(){
    alert("This page has loaded");

    //background-color change after page has loaded
   setTimeout(() => {
    $("body").css("background-color","yellow");
   }, 3000);

    //Paragraph change
    setTimeout(() => {
        $("p.para1").css("color","pink");
    }, 3000);

    //Image Fade in and Out
    setInterval(() => {
        $(".fade-btn").click(function(){
            $("img").fadeToggle(3000);
        });
    
        $(".stop-fade").click(function(){
            $("img").stop();
        });
    
    }, 1000);

    //Accordion Animation Function
    $(".accord").hover(function(){
        let index = $(this).index()
        let dropC = $(".accord").eq(index);
        let dropB = $(`.accord:eq(${index}) .card-title`) //can be done the same as line 19
        
        if(dropB.css("display")== "block"){
            dropB.slideUp();
        }
        else{
            $(".card-title").slideUp()
            dropB.slideDown();
        } 
    })


    //chaining the webpage
   setInterval(() => {
    $(".change").click(function(){
        $(".container").css("background-color","blue").slideUp(3000).slideDown(1000);
    })
   }, 1000);

   //selecting any element to fade out 
   $("body").click((e) => {
    let target = $(e.target);
    if(target.is("h1,h2,h3,p,img,.card-body,.card-title")){
        target.fadeOut()
    }
   });
})