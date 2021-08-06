function nextSlide() {
    var newItems = document.getElementsByClassName("new-item");
    for (var i = 0; i < newItems.length; i++) {
        var classList = newItems[i].classList;
             if(classList.contains("ni-1")){classList.remove("ni-1");classList.add("ni-8");}
        else if(classList.contains("ni-2")){classList.remove("ni-2");classList.add("ni-1");}
        else if(classList.contains("ni-3")){classList.remove("ni-3");classList.add("ni-2");}
        else if(classList.contains("ni-4")){classList.remove("ni-4");classList.add("ni-3");}
        else if(classList.contains("ni-5")){classList.remove("ni-5");classList.add("ni-4");}
        else if(classList.contains("ni-6")){classList.remove("ni-6");classList.add("ni-5");}
        else if(classList.contains("ni-7")){classList.remove("ni-7");classList.add("ni-6");}
        else if(classList.contains("ni-8")){classList.remove("ni-8");classList.add("ni-7");}
    }
}

function previousSlide() {
    var newItems = document.getElementsByClassName("new-item");
    for (var i = 0; i < newItems.length; i++) {
        var classList = newItems[i].classList;
        if(classList.contains("ni-1")){classList.remove("ni-1");classList.add("ni-2");}
        else if(classList.contains("ni-2")){classList.remove("ni-2");classList.add("ni-3");}
        else if(classList.contains("ni-3")){classList.remove("ni-3");classList.add("ni-4");}
        else if(classList.contains("ni-4")){classList.remove("ni-4");classList.add("ni-5");}
        else if(classList.contains("ni-5")){classList.remove("ni-5");classList.add("ni-6");}
        else if(classList.contains("ni-6")){classList.remove("ni-6");classList.add("ni-7");}
        else if(classList.contains("ni-7")){classList.remove("ni-7");classList.add("ni-8");}
        else if(classList.contains("ni-8")){classList.remove("ni-8");classList.add("ni-1");}
    }
}