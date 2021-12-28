$(document).on('click', '#nav-logo', function(){
  // logo click sends to home
  window.location.href = "./index.html";
});

$(document).ready(function() { // after everything in html loads
  $.ajax({
    type: "GET",
    url: "./resources/js/data.json",
    dataType: "json",
    cache: "false",
    success: function(responseData, status) {
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
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

});