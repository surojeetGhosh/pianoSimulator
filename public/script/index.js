let keys = document.getElementsByClassName("keys");
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");
        let audio = new Audio("../sound/"+id+".wav");
        audio.play();
    })
}