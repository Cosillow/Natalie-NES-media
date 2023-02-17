$(document).ready(function() {
    loadPictures();
});


let dir = "./resources/img/photography";
function loadPictures() {
    // look through the photography directory and insert img's into DOM
    $.ajax({
        url : dir,
        success: function (data) {
            let photoGrid = document.getElementById("photo-grid");
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) {
                    let img = document.createElement("img");
                    img.src = dir + "/" + val.split('/').pop(0);
                    img.alt = "Photo taken by NES-media";
                    img.setAttribute("loading", "lazy");
                    photoGrid.append(img);
                } 
            });
        }
    });
}