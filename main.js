
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
                alt=${(element.name).replace(" ","_")} style="width: 200px; height: 300px;padding: 10px;">
                  <h2 style="padding:10px" >${element.name} </h2>
               
                  </div>`) 
  })

    var input=$("#searchplace")
    console.log(input);
    
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
    console.log("hello");
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
