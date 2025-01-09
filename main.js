

var mangaList = [
    {
      name: "One Piece",
      chapter: 1095,
      src: "./resources/onepiece.jpg"
    },
    {
      name: "Naruto",
      chapter: 700,
      src: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
    },
    {
      name: "Attack on Titan",
      chapter: 139,
      src: "./resources/Attack_on_Titan.jpg"
    },
    {
      name: "My Hero Academia",
      chapter: 401,
      src: "./resources/My_Hero_Academia.webp"
    },
    {
      name: "Demon Slayer",
      chapter: 205,
      src: "./resources/Demon_Slayer.jpg"
    },
    {
      name: "Jujutsu Kaisen",
      chapter: 240,
      src: "./resources/Jujutsu_Kaisen.jpg"
    },
    {
      name: "Chainsaw Man",
      chapter: 143,
      src: "./resources/Chainsaw_Man.jpg"
    },
    {
      name: "Bleach",
      chapter: 686,
      src: "./resources/Bleach.png"

    },
    {
      name: "Tokyo Revengers",
      chapter: 278,
      src: "./resources/Tokyo_Revengers.jpg"
    },
    {
      name: "Black Clover",
      chapter: 372,
      src: "./resources/Black_Clover.jpg"
    }
  ];

  mangaList.map(function(element){
    $('.content').append( `<div
             id=${element.name.replace(" ","_")} >
              <img  class="manga" src=${element.src}
                alt=${(element.name).replace(" ","_")} style="width: 200px; height: 300px;padding: 10px;">
                  <h2 style="padding:10px" >${element.name} </h2>
               
                  </div>`) 
  })

    var input=$("#searchplace")    
    var manga=$('.manga')
    console.log(input.val().toLowerCase());
  $('#searchbtn').on("click", function () {
    manga.each(function () {
      if ($(this).attr("alt").toLowerCase().includes(input.val().toLowerCase())) {
        $(this).parent().show();
      } else {
        $(this).parent().hide();
      }
    });
  })
//search with button 

  $('#searchplace').on("keypress",function(event){
   if( event.which===13){
    console.log(input.val());
    manga.each(function () {
        if ($(this).attr("alt").toLowerCase().includes(input.val().replace(" ","_").toLowerCase())) {
          $(this).parent().show();
          
        } else {
          $(this).parent().hide();
          
        }
      })
      input.val('')
   }
})
// saerch with button enter (event.which===13)
$('#registerlink').on('click',function(){
    location.replace("registerindex.html")
})

$('#loginlink').on('click',function(){
  location.replace("login.html")
})

$('#homebtn').on('click',function(){
    location.replace('index.html')
})
$('#logo').on('click',function(){
  location.replace('index.html')
})

function Makeuser(name,Password){
  var  obj={}
      obj.username=name
      obj.password=Password
      obj.bookmark=""
  return obj
}
var users = [
    Makeuser(  "JohnDoe",  "password123" ),
    Makeuser(  "JaneSmith",  "12345abc" ),
    Makeuser(  "MangaLover",  "onepiece4life" ),
    Makeuser(  "AnimeFan99",  "naruto2023" ),
    Makeuser(  "DarkKnight",  "batman123" ),
    Makeuser(  "LightYagami",  "kiraRules" ),
    Makeuser(  "LeviAckerman",  "surveyCorp" ),
    Makeuser(  "ItachiUchiha",  "sharingan007" ),
    Makeuser(  "TanjiroKamado",  "nezukoForever" ),
    Makeuser(  "SaitamaHero",  "onepunchMan" ),
    Makeuser( "Abdou","mypass123"),
    Makeuser("Louay","manga789"),
  ]
  console.log(users);
  
  
  
 
  $('#register').on('click',function(){
   users.push(Makeuser($('#new-username').val(),$('#new-password').val()))
   localStorage.setItem("user",JSON.stringify(users))
   console.log($('#username').val());
   $('#username').val("")
   $('#new-password').val("")
  location.replace("index.html")
  })

  $('#login').on('click',function(){
    if(localStorage.getItem("user").includes($("#username").val())){
      $("#loginlink").html($("#username").val())
      localStorage.setItem("login",$("#username").val())
      location.replace("index.html")
    }
  })
  if(localStorage.getItem("login",$("#username").val())==undefined){
    $("#loginlink").html("Login")     
}
  else{ $("#loginlink").html( localStorage.getItem("login",$("#username").val()))&&$("#registerlink").hide()}


  //toggle light and Dark mode

  $('#togglemode').on('click', function(){ 
    console.log($("#mode").attr("href"));
    
    if($("#mode").attr("href")==="./css/style.css"){
      $("#mode").attr("href","./css/darkcss.css")
    }  
    else if( $("#mode").attr("href")==="./css/darkcss.css"){
      ($("#mode").attr("href","./css/style.css"))
    }
  })

  $('#togglemode').on('click', function(){ 
    console.log($("#mode").attr("href"));
    
    if($("#mode").attr("href")==="./css/register.css"){
      $("#mode").attr("href","./css/registerdarkstyle.css")
    }  
    else if( $("#mode").attr("href")==="./css/registerdarkstyle.css"){
      ($("#mode").attr("href","./css/register.css"))
    }
  })
