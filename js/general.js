function menu() {
    console.log("mnu");
    var x=document.getElementById("nav-bar-items");
    if (x.className === "nav-bar-items") {
        x.className += "-responsive";
    }else {
        x.className = "nav-bar-items";
    }
}