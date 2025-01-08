document.ready(function(){
    var users = [
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
        
      ];
      localStorage.setItem("user",JSON.stringify(users))
      function Makeuser(name,Password){
        var  obj={}
            obj.username=name
            obj.password=Password
        return obj
      }
      $('#register').on('submit',function(){
       var user=Makeuser($('#username'),$('new-password'))
       users.push(user)
       localStorage.setItem("user",JSON.stringify(users))
       location.href="index.html"
      })
})