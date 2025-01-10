// this is our manga list
var mangaList = [
  {
    id: 1,
    name: "One Piece",
    chapter: 1095,
    src: "./resources/onepiece.jpg",
    imageGallery: [
      "./resources/onepiece1.jpg",
      "./resources/onepiece2.jpg",
      "./resources/onepiece3.jpg",
    ],
    quotes: [
      "When do you think people die? When they are shot with a bullet ? No. When they eat a soup made from a poisonous mushroom? No. They die... when they are forgotten!",
      "Power isn't determined by your size, but the size of your heart and dreams!",
      "I'm going to become the Pirate King!",
    ],
    genres: "Adventure Action Fantasy Comedy",
  },
  {
    id: 2,
    name: "Naruto",
    chapter: 700,
    src: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    imageGallery: [
      "./resources/naruto1.jpg",
      "./resources/naruto2.jpg",
      "./resources/naruto3.jpg",
    ],
    quotes: [
      "Hard work is worthless for those that don’t believe in themselves.",
      "When a man learns to love, he must bear the risk of hatred.",
      "I never go back on my word. That is my ninja way!",
    ],
    genres: "Adventure Action Martial Arts Fantasy",
  },
  {
    id: 3,
    name: "Attack on Titan",
    chapter: 139,
    src: "./resources/Attack_on_Titan.jpg",
    imageGallery: [
      "./resources/aot1.jpg",
      "./resources/aot2.jpg",
      "./resources/aot3.jpg",
    ],
    quotes: [
      "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
      "I want to see and understand the world outside. I don’t want to die inside these walls without knowing what’s out there!",
      "This world is merciless, and it’s also very beautiful.",
    ],
    genres: "Action Drama Dark Fantasy Tragedy",
  },
  {
    id: 4,
    name: "My Hero Academia",
    chapter: 401,
    src: "./resources/My_Hero_Academia.webp",
    imageGallery: [
      "./resources/mha1.jpg",
      "./resources/mha2.jpg",
      "./resources/mha3.jpg",
    ],
    quotes: [
      "When you have to save someone, they’re usually in a scary situation. A true hero saves not only their lives but also their spirits.",
      "Dreams can become reality. You just have to keep chasing them.",
      "Go beyond! Plus Ultra!",
    ],
    genres: "Action Superhero Comedy Fantasy",
  },
  {
    id: 5,
    name: "Demon Slayer",
    chapter: 205,
    src: "./resources/Demon_Slayer.jpg",
    imageGallery: [
      "./resources/ds1.jpg",
      "./resources/ds2.jpg",
      "./resources/ds3.jpg",
    ],
    quotes: [
      "Go forward! You still have everyone!",
      "A lesson without pain is meaningless.",
      "Don’t stop! Keep running!",
    ],
    genres: "Action Dark Fantasy Supernatural Drama",
  },
  {
    id: 6,
    name: "Jujutsu Kaisen",
    chapter: 240,
    src: "./resources/Jujutsu_Kaisen.jpg",
    imageGallery: [
      "./resources/jjk1.jpg",
      "./resources/jjk2.jpg",
      "./resources/jjk3.jpg",
    ],
    quotes: [
      "I don’t know how I’ll feel when I’m dead, but I don’t want to regret the way I lived.",
      "It’s not about whether I can. I have to do it.",
      "Being weak is nothing to be ashamed of. Staying weak is.",
    ],
    genres: "Action Dark Fantasy Supernatural Drama",
  },
  {
    id: 7,
    name: "Chainsaw Man",
    chapter: 143,
    src: "./resources/Chainsaw_Man.jpg",
    imageGallery: [
      "./resources/csm1.jpg",
      "./resources/csm2.jpg",
      "./resources/csm3.jpg",
    ],
    quotes: [
      "My dream is to touch some boobs.",
      "Don’t open the door.",
      "The happiness of living a normal life and eating good food is enough for me.",
    ],
    genres: "Action Dark Fantasy Horror Comedy",
  },
  {
    id: 8,
    name: "Bleach",
    chapter: 686,
    src: "./resources/Bleach.png",
    imageGallery: [
      "./resources/bleach1.jpg",
      "./resources/bleach2.jpg",
      "./resources/bleach3.jpg",
    ],
    quotes: [
      "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart.",
      "A man is not worth a damn if he can’t protect his friends.",
      "If I don’t wield the sword, I can’t protect you. If I keep wielding the sword, I can’t embrace you.",
    ],
    genres: "Action Supernatural Adventure Fantasy",
  },
  {
    id: 9,
    name: "Tokyo Revengers",
    chapter: 278,
    src: "./resources/Tokyo_Revengers.jpg",
    imageGallery: [
      "./resources/tr1.jpg",
      "./resources/tr2.jpg",
      "./resources/tr3.jpg",
    ],
    quotes: [
      "It’s not how you start. It’s how you end.",
      "You don’t need to bow your head. Just have a heart that cares.",
      "No matter how hard things get, only the strong can move forward.",
    ],
    genres: "Action Drama Time Travel Crime",
  },
  {
    id: 10,
    name: "Black Clover",
    chapter: 372,
    src: "./resources/Black_Clover.jpg",
    imageGallery: [
      "./resources/bc1.jpg",
      "./resources/bc2.jpg",
      "./resources/bc3.jpg",
    ],
    quotes: [
      "Surpass your limits. Right here. Right now.",
      "If you don’t give up, you’ll get through.",
      "Magic is not everything.",
    ],
    genres: "Action Adventure Fantasy Magic",
  },
];
localStorage.setItem("mangalist", JSON.stringify(mangaList));

// add the images to the html
mangaList.map(function (element) {
  $(".content").append(`
    <div class="eachmanga" name="${element.name}">
      <div class="mangaa">
        <img class="manga" src="${
          element.src
        }" alt="${element.name.replace(" ", "_")}">
        <p>Chapter: ${element.chapter}</p>
      </div>
      <div class="quotes">
        <h2>Genre</h2>
        <p>${element.genres}</p>
        <h2>Quotes:</h2>
        <p>${
          element.quotes[Math.floor(Math.random() * element.quotes.length)]
        }</p>
      </div>
      <h2 style="padding:10px">${element.name}</h2>
      <button class="Bookmark">Bookmark</button>
    </div>
  `);
});

$(".Bookmark").hide();
var input = $("#searchplace");

// Search with button
$("#searchbtn").on("click", function () {
  $(".eachmanga").each(function () {
    var x = $(this);
    if (x.attr("name").toLowerCase().includes(input.val().toLowerCase())) {
      console.log(x.attr("name"));
      x.show();
    } else {
      x.hide();
    }
  });
});

// saerch with button enter (event.which===13)
$("#searchplace").on("keypress", function (event) {
  if (event.which === 13) {
    console.log(input.val());
    $(".eachmanga").each(function () {
      var x = $(this);

      if (x.attr("name").toLowerCase().includes(input.val().toLowerCase())) {
        console.log(x.attr("name").toLowerCase());
        x.show();
      } else {
        x.hide();
      }
    });

    input.val("");
  }
});

// headr buttons
$("#registerlink").on("click", function () {
  location.replace("registerindex.html");
});

$("#loginlink").on("click", function () {
  location.replace("login.html");
});

$("#homebtn").on("click", function () {
  location.replace("index.html");
});
$("#logo").on("click", function () {
  location.replace("index.html");
});
// creating users
function Makeuser(name, Password) {
  var obj = {};
  obj.username = name;
  obj.password = Password;
  obj.bookmark = [];
  return obj;
}
var users = [
  Makeuser("JohnDoe", "password123", []),
  Makeuser("JaneSmith", "12345abc", []),
  Makeuser("MangaLover", "onepiece4life", []),
  Makeuser("AnimeFan99", "naruto2023", []),
  Makeuser("DarkKnight", "batman123", []),
  Makeuser("LightYagami", "kiraRules", []),
  Makeuser("LeviAckerman", "surveyCorp", []),
  Makeuser("ItachiUchiha", "sharingan007", []),
  Makeuser("TanjiroKamado", "nezukoForever", []),
  Makeuser("SaitamaHero", "onepunchMan", []),
  Makeuser("Abdou", "mypass123", []),
  Makeuser("Louay", "manga789", []),
];
localStorage.setItem("user", JSON.stringify(users));
//register section
$("#register").on("click", function () {
  users.push(Makeuser($("#new-username").val(), $("#new-password").val()));
  localStorage.setItem("user", JSON.stringify(users));
  console.log($("#username").val());
  $("#username").val("");
  $("#new-password").val("");
});

//login section
$("#login").on("click", function () {
  if (localStorage.getItem("user").includes($("#username").val())) {
    $("#loginlink").html($("#username").val());
    localStorage.setItem("login", $("#username").val());
    location.replace("index.html");
  }
});

//logout section

// when logged in

if (localStorage.getItem("login") === null) {
  $("#loginlink").html("Login");
  $(".Bookmark").hide();
  $("#logoutlink").hide();
} else {
  $("#loginlink").html(localStorage.getItem("login"));
  $("#registerlink").hide();
  $(".Bookmark").show();
}


//toggle light and Dark mode
$("#togglemode").on("click", function () {
  if ($("#mode").attr("href") === "./css/light.css") {
    $("#mode").attr("href", "./css/dark.css");
  } else if ($("#mode").attr("href") === "./css/dark.css") {
    $("#mode").attr("href", "./css/light.css");
  }
});

$("#togglemode").on("click", function () {
  console.log($("#mode").attr("href"));

  if ($("#mode").attr("href") === "./css/register.css") {
    $("#mode").attr("href", "./css/registerdarkstyle.css");
  } else if ($("#mode").attr("href") === "./css/registerdarkstyle.css") {
    $("#mode").attr("href", "./css/register.css");
  }
});

//

// Function to change image on hover
function enableImageHoverEffect() {
  $(".manga").hover(
    function () {
      var parentDivName = $(this).closest(".eachmanga").attr("name");
      var mangaItem = mangaList.find(function (item) {
        return item.name === parentDivName;
      });

      if (mangaItem) {
        var index = 0;
        var imageElement = $(this);

        var intervalId = setInterval(function () {
          index = (index + 1) % mangaItem.imageGallery.length;
          imageElement.attr("src", mangaItem.imageGallery[index]);
        }, 1000);

        $(this).data("intervalId", intervalId);
      }
    },
    function () {
      clearInterval($(this).data("intervalId"));

      var parentDivName = $(this).closest(".eachmanga").attr("name");
      var mangaItem = mangaList.find(function (item) {
        return item.name === parentDivName;
      });

      if (mangaItem) {
        $(this).attr("src", mangaItem.src);
      }
    }
  );
}

// Call the function after appending manga elements
enableImageHoverEffect();

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var users = JSON.parse(localStorage.getItem("user"));
  var user = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    localStorage.setItem("login", username);
    location.replace("index.html");
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  localStorage.removeItem("login");
  location.replace("index.html");
}
// bookmark function
$(".Bookmark").on("click", function () {
  var parentDivName = $(this).closest(".eachmanga").attr("name");

  var mangaItem = mangaList.find(function (item) {
    return item.name === parentDivName;
  });

  if (!mangaItem) {
    alert("Manga not found!");
  }

  var loggedInUsername = localStorage.getItem("login");
  var users = JSON.parse(localStorage.getItem("user"));

  if (!loggedInUsername || !users) {
    alert("User not logged in or user data missing.");
    return;
  }

  var user = users.find(function (user) {
    return user.username === loggedInUsername;
  });

  if (!user) {
    alert("User not found.");
    return;
  }

  if (!Array.isArray(user.bookmark)) {
    user.bookmark = [];
  }

  var bookmarkIndex = user.bookmark.indexOf(mangaItem.name);

  if (bookmarkIndex > -1) {
    user.bookmark.splice(bookmarkIndex, 1);
    alert(mangaItem.name + " has been removed from your bookmarks.");
  } else {
    user.bookmark.push(mangaItem.name);
    alert(mangaItem.name + " has been bookmarked successfully!");
  }

  localStorage.setItem("user", JSON.stringify(users));
});

// footer
$(document).ready(function () {
  var footer = `
    <footer>
      <div class="footer-content">
        <h3>ALmanga</h3>
        <p>developed by abdelmajid & louay</p></p>
        <ul class="socials">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy; <a href="https://www.termsfeed.com/blog/copyright-laws-linking-sources/">TermsFeed</a></p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li><a href="mailto: abdoumaamar1@gmail.com">Contact</a></li>
          
          </ul>
        </div>
      </div>
    </footer>
  `;
  $("#footer").html(footer);
});
