
var mangaList = [
    {
      name: "One Piece",
      chapter: 1095,
      src: "https://upload.wikimedia.org/wikipedia/en/3/3c/One_Piece_Logo.png"
    },
    {
      name: "Naruto",
      chapter: 700,
      src: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
    },
    {
      name: "Attack on Titan",
      chapter: 139,
      src: "https://upload.wikimedia.org/wikipedia/en/4/4a/Attack_on_Titan_vol1_cover.jpg"
    },
    {
      name: "My Hero Academia",
      chapter: 401,
      src: "https://upload.wikimedia.org/wikipedia/en/0/03/My_Hero_Academia_Volume_1_cover.jpg"
    },
    {
      name: "Demon Slayer",
      chapter: 205,
      src: "https://upload.wikimedia.org/wikipedia/en/1/1b/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg"
    },
    {
      name: "Jujutsu Kaisen",
      chapter: 240,
      src: "https://upload.wikimedia.org/wikipedia/en/2/2d/Jujutsu_Kaisen_vol_1.png"
    },
    {
      name: "Chainsaw Man",
      chapter: 143,
      src: "https://upload.wikimedia.org/wikipedia/en/a/a8/Chainsaw_Man_vol_1.png"
    },
    {
      name: "Bleach",
      chapter: 686,
      src: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_cover_01.jpg"

    },
    {
      name: "Tokyo Revengers",
      chapter: 278,
      src: "https://upload.wikimedia.org/wikipedia/en/e/ed/Tokyo_Revengers_vol_1.png"
    },
    {
      name: "Black Clover",
      chapter: 372,
      src: "https://upload.wikimedia.org/wikipedia/en/2/21/Black_Clover_volume_1_cover.jpg"
    }
  ];

  mangaList.map(function(element){
    $('.content').append( `<div
             id=${element.name.replace(" ","_")}>
              <img  class="manga" src=${element.src}
                alt=${(element.name).replace(" ","_")}>
                  <h2>${element.name}</h2>
               
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
   }
})
// saerch with button enter (event.which===13)
$('#registerlink').on('click',function(){
    location.replace("registerindex.html")

})
$('#homebtn').on('click',function(){
    location.replace('index.html')
})
var users =localStorage.getItem("users")|| [
    { username: "JohnDoe", password: "password123" },
    { username: "JaneSmith", password: "12345abc" },
    { username: "MangaLover", password: "onepiece4life" },
    { username: "AnimeFan99", password: "naruto2023" },
    { username: "DarkKnight", password: "batman123" },
    { username: "LightYagami", password: "kiraRules" },
    { username: "LeviAckerman", password: "surveyCorp" },
    { username: "ItachiUchiha", password: "sharingan007" },
    { username: "TanjiroKamado", password: "nezukoForever" },
    { username: "SaitamaHero", password: "onepunchMan" }
    
  ]
  
  
  function Makeuser(name,Password){
    var  obj={}
        obj.username=name
        obj.password=Password
    return obj
  }
  $('#register').on('click',function(){
    console.log($('new-password').val());
   var user=Makeuser($('#username').val(),$('#new-password').val())
   users.push(user)
   localStorage.setItem("user",JSON.stringify(users))
  location.replace("index.html")
  })