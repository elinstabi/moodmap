$(document).ready(function() {
console.log("hello");


$('#ledsenbutton').click(function(){

$("#tweet_feedback").empty();


var url = "https://free-ec2.scraperwiki.com/fjcd5da/990c960250d8438/sql/?q=select%20%0Acreated_at%2C%0A%20%20%20%20text%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%20200"


 $.getJSON(url, whatever);

 });



  function whatever(data) {
    // The variable "data" represents the information we got back.
        //console.log(data);
        //console.log(data[1].text);
        
        var str = "";

        for ( var i = 0; i < data.length; i++ ) {
            str = "<div class='row tweet'><div class='showTweet'><p class='theTweet'>" + data[i].text + "</p></div></div>";
            $("#sad").append(str);

        }
    }



$('#olyckligbutton').click(function(){

$("#tweet_feedback").empty();


var url = "https://free-ec2.scraperwiki.com/de7lnby/b99fed7dbeb8415/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09text%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%20100%0A"


 $.getJSON(url, whatever);

 });



  function whatever(data) {
    // The variable "data" represents the information we got back.
        //console.log(data);
        //console.log(data[1].text);
        
        var str = "";

        for ( var i = 0; i < data.length; i++ ) {
            str = "<div class='fuck' style='color:blue;'>" + data[i].text + "</div>";
            $"<div class='fuck' style='color:blue;'>"("#tweet_feedback").append(str)"</div>";

        }
    }



$('#lyckligbutton').click(function(){

$("#tweet_feedback").empty();


var url = "https://free-ec2.scraperwiki.com/bniepoa/e1fc798cefed4f1/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%20%20%20%20text%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%20100"


 $.getJSON(url, whatever);

 });



  function whatever(data) {
    // The variable "data" represents the information we got back.
        //console.log(data);
        //console.log(data[1].text);
        
        var str = "";

        for ( var i = 0; i < data.length; i++ ) {
            str = "<div class='row'>" + data[i].text + "</div>";
            $("#tweet_feedback").append(str);

        }
    }

    $('.showTweet').hover(function(){
        $(this).parent().children('.theTweet').show();
    }, function(){
        $(this).parent().children('.theTweet').hide();
    })

}); 





/* function lolImages(data) {
  
  for ( var i = 0; i < data.data.length; i++ ) {

   $('#images').append ('<img src="' + data.data[i].images.standard_resolution.url + '">');
   }
 }



$('#lolBtn').click(function(){

$("#images").empty();

 var hashtag = $("lol").val();
 
     url = "https://api.instagram.com/v1/tags/lol/media/recent?client_id=59376f20139c4c13a69fda0c84f01ac2&callback=?&count=400";

 $.getJSON(url, lolImages);

});









$('#upprymdbutton').click(function(){

$("#tweet_feedback").empty();


var url = "https://free-ec2.scraperwiki.com/fjcd5da/990c960250d8438/sql/?q=select%20%0A%20%20%20%20media%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%20200"


 $.getJSON(url, whatever);

 });



  function whatever(data) {
    // The variable "data" represents the information we got back.
        //console.log(data);
        //console.log(data[1].text);
        
        var str = "";

        for ( var i = 0; i < data.length; i++ ) {
            str = "<div class='row'><img src='"+ data[i].media +"'></div>";
            $("#tweet_feedback").append(str);

        }
    }

*/

