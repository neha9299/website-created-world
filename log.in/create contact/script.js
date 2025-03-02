const input = document.querySelectorAll(".input");

function focusfun(){
    let parent = this.parentNode;
    parent.classlist.add("focus");
}

function blurfun(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classlist.remove("focus")
    }
}

input .forEach((inputs) => {
    inputs.addEventListener("focus", focusfun);
    inputs.addEventListener("blur", blurfun);
});