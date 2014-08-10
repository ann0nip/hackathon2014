/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
        var pal=null;
        $.ajax({
            url: "http://localhost/hacka/hackathon2014/json/file.json"
        }).done(function(e) {
            pal = e;
        }).always(function(){

            var falseIx2 = null;
            var falseWord = null;
            var falseWord2 = null;
            var word = null;
            console.log(pal);
            var falseIx = Math.floor(Math.random() * pal.length);

            $(".pirata-junto").on("click",function(evnt){
    			evnt.preventDefault();
                var ix = Math.floor(Math.random() * pal.length);
                word = pal[ix];
                do {
                     falseIx = Math.floor(Math.random() * pal.length);
                     falseIx2 = Math.floor(Math.random() * pal.length);

                     falseWord = pal[falseIx];
                     falseWord2 = pal[falseIx2];

                } while(falseWord.en == word.en || falseWord2.en == word.en );

                $(".a-button.first").text(falseWord.en);
                $(".a-button.second").text(falseWord2.en);
                $(".a-button.third").text(word.en);

                console.log(word.en);
                $("audio")[0].src = "http://www.howjsay.com/mp3/"+ word.en +".mp3";
                $("audio")[0].play();
    			
            });
            $(".answers .a-button").on("click", function() {
                if ($($(this)[0]).html() == word.en) {
                    alert("Exito");
                } else {
                    alert("Wrong");
                }
            });

            $(".cont-moneda").on("click",function(){
                $(".box.first").slideUp("slow",function(){
                });
                    $(".box.second").slideDown();
            });

            var flag = false;
            setInterval(function() {
                if(flag==false){
                    flag=true;
                    $(".loro")[0].src = "img/Pics/loro/loro_ojo_abierto.png";
                }else{
                    flag=false
                    $(".loro")[0].src = "img/Pics/loro/loro_ojo_cerrado.png";
                }
            },2000);
        });
});