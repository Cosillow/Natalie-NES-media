// add favicon to all pages
// <link rel="icon" type="image/png" href="./resources/img/logo-light.png"/>
let fav = document.createElement('link');
fav.href = "../resources/img/logo-dark.png";
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
    url: "../resources/js/data.json",
    dataType: "json",
    cache: "false",
    success: function (responseData, status) {
      let ul = document.createElement("ul");
      ul.id = "menu"
      $.each(responseData.header, function (key, value) { // add internal navagation links to header
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = key;
        a.href = value;
        li.append(a);
        ul.append(li);
      });
      
      const hamHTML = '<div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>';
      let hamBtn = document.createElement("div");
      hamBtn.innerHTML = hamHTML;
      hamBtn.id = "hamburger-icon";
      hamBtn.onclick = function() { 
        hamBtn.classList.toggle("change");
        ul.classList.toggle("mobile-visible");
      };

      let nav = document.createElement("nav");
      let header = document.createElement("header");
      nav.append(ul);
      nav.prepend(hamBtn);
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
    // this page should have a footer
    const footerStr = '<h2>lets Chat</h2><p id="email">For all inquiries regarding photo, video, or editing services, please email me at nes.media.llc@gmail.com or give me a call at 603.809.0665</p><p id="socials">Keep up with me on Instagram @n.e.s.media and TikTok @nes.media</p>'
    const footer = $("<footer>").html(footerStr);
    $("body").append(footer);
  }
}