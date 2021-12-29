$(document).on('click', '#nav-logo', function(){
  // logo click sends to home
  window.location.href = "./index.html";
});

// add font awesome cdn
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
var cdn = document.createElement('link');
cdn.rel = "stylesheet";
cdn.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
cdn.integrity = "sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==";
cdn.crossOrigin = "anonymous";
cdn.referrerPolicy = "no-referrer";
document.head.append(cdn);

$(document).ready(function() { // after everything in html loads
  $.ajax({
    type: "GET",
    url: "./resources/js/data.json",
    dataType: "json",
    cache: "false",
    success: function(responseData, status) {
      // header
      // ***************************************************
      var ul = document.createElement("ul");
      var liCon = document.createElement("li");
      liCon.id = "menu";
      var ul2 = document.createElement("ul");
      $.each(responseData.header, function(key, value) { // add internal navagation links to header
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
      ul.append(liCon);
      var nav = document.createElement("nav");
      var header = document.createElement("header");
      nav.append(ul);
      header.append(nav);
      document.body.prepend(header);
      // footer
      // ***************************************************
      var nav = document.createElement('nav');
      var ul = document.createElement('ul');
      ul.id = "social-list";
      $.each(responseData.footer.socials, function(i, social) {
        var li = document.createElement('li');
        li.className = "social-list";
        var a = document.createElement('a');
        a.className = "social-link";
        var i = document.createElement('i');
        i.classList = social.icon;
        a.href = social.link;
        a.append(i);
        var span = document.createElement('span');
        span.append(social.handle);
        a.append(span);
        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      var footer = document.createElement('footer');
      footer.append(nav);
      document.body.append(footer);
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

});