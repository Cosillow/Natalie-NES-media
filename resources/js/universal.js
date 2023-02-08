$(document).on('click', '#nav-logo', function () {
  // logo click sends to home
  window.location.href = "./index.html";
});

// add font awesome cdn
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// var cdn = document.createElement('link');
// cdn.rel = "stylesheet";
// cdn.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
// cdn.integrity = "sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==";
// cdn.crossOrigin = "anonymous";
// cdn.referrerPolicy = "no-referrer";
// document.head.append(cdn);


// add favicon to all pages
// <link rel="icon" type="image/png" href="./resources/img/logo-light.png"/>
var fav = document.createElement('link');
fav.href = "./resources/img/logo-dark.png";
fav.type = "image/png";
fav.rel = "icon";
document.head.append(fav);

$(document).ready(function () { // after everything in html loads
  writeHeader();
  writeFooter(["", "index.html"]);
});


function writeHeader() {
  $.ajax({
    type: "GET",
    url: "./resources/js/data.json",
    dataType: "json",
    cache: "false",
    success: function (responseData, status) {
      var ul = document.createElement("ul");
      var liCon = document.createElement("li");
      liCon.id = "menu";
      var ul2 = document.createElement("ul");
      // add button to close modal (mobile only)
      var closeLi = document.createElement('li');
      var closeBt = document.createElement('button');
      closeBt.innerHTML = "&times;";
      closeBt.id = "close-modal";
      closeBt.addEventListener("click", function () {
        ul2.style.display = "none";
      });
      closeLi.append(closeBt);
      ul2.prepend(closeLi);
      $.each(responseData.header, function (key, value) { // add internal navagation links to header
        var li = document.createElement("li");
        if (key === "nav-logo") {
          // image logo
          var img = document.createElement("img");
          img.src = value;
          img.id = key;
          img.alt = "NES-media logo";
          li.append(img);
          ul.append(li);
        } else {
          // anchor tag
          var a = document.createElement("a");
          a.innerHTML = key;
          a.href = value;
          li.append(a);
          ul2.append(li);
        }
      });
      liCon.append(ul2);
      // hambuger button
      var ham = document.createElement('button');
      ham.id = "hamburger-button";
      var hamIcon = document.createElement('i');
      hamIcon.className = "fas fa-bars";
      ham.append(hamIcon);
      ham.addEventListener("click", function () {
        ul2.style.display = "flex";
      });
      liCon.prepend(ham);
      ul.append(liCon);
      var nav = document.createElement("nav");
      var header = document.createElement("header");
      nav.append(ul);
      header.append(nav);
      document.body.prepend(header);
    }, error: function (msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
}

function writeFooter(excludes = []) {
  const currentPage = window.location.pathname.split("/").pop();
  if (!excludes.includes(currentPage)) {
    console.log("this page should have a footer");
    // this page should have a footer
    const footerStr = '<h2>lets Chat</h2><p id="email">For all inquiries regarding photo, video, or editing services, please email me at nes.media.llc@gmail.com or give me a call at 603.809.0665</p><p id="socials">Keep up with me on Instagram @n.e.s.media and TikTok @nes.media</p>'
    const footer = $("<footer>").html(footerStr);
    $("body").append(footer);
  }
}